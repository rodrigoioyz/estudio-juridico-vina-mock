'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { contactSchema, type ContactFormData } from '@/lib/contact-schema';

const AREA_OPTIONS = [
  { value: '', label: 'Seleccione un área (opcional)' },
  { value: 'Terminación del contrato', label: 'Terminación del contrato' },
  { value: 'Remuneraciones', label: 'Remuneraciones' },
  { value: 'Derechos fundamentales', label: 'Derechos fundamentales' },
  { value: 'Relación laboral', label: 'Relación laboral' },
  { value: 'Derecho colectivo', label: 'Derecho colectivo' },
  { value: 'Empresas', label: 'Empresas / Compliance' },
  { value: 'Otro', label: 'Otro' },
];

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    setStatus('sending');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // En producción, el frontend obtiene el token de reCAPTCHA v3 aquí
        },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || 'Error al enviar el formulario');
      }

      setStatus('success');
      reset();
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error ? err.message : 'Error inesperado. Intente nuevamente.',
      );
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <h3 className="text-green-800 text-lg font-semibold mb-2">
          ¡Gracias por contactarnos!
        </h3>
        <p className="text-green-700">
          Hemos recibido su consulta. Un abogado del estudio le responderá a la
          brevedad.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* ── Nombre ─────────────────────────────── */}
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium mb-1">
          Nombre completo *
        </label>
        <input
          id="nombre"
          type="text"
          {...register('nombre')}
          className="w-full border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Su nombre"
        />
        {errors.nombre && (
          <p className="text-red-600 text-sm mt-1">{errors.nombre.message}</p>
        )}
      </div>

      {/* ── Email ──────────────────────────────── */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email *
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className="w-full border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="su@email.com"
        />
        {errors.email && (
          <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* ── Teléfono ───────────────────────────── */}
      <div>
        <label htmlFor="telefono" className="block text-sm font-medium mb-1">
          Teléfono
        </label>
        <input
          id="telefono"
          type="tel"
          {...register('telefono')}
          className="w-full border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="+56 9 XXXX XXXX"
        />
        {errors.telefono && (
          <p className="text-red-600 text-sm mt-1">{errors.telefono.message}</p>
        )}
      </div>

      {/* ── Área ───────────────────────────────── */}
      <div>
        <label htmlFor="area" className="block text-sm font-medium mb-1">
          Área de consulta
        </label>
        <select
          id="area"
          {...register('area')}
          className="w-full border border-border rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          {AREA_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* ── Consulta ───────────────────────────── */}
      <div>
        <label htmlFor="consulta" className="block text-sm font-medium mb-1">
          Consulta *
        </label>
        <textarea
          id="consulta"
          rows={5}
          {...register('consulta')}
          className="w-full border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-y"
          placeholder="Describa brevemente su situación laboral..."
        />
        {errors.consulta && (
          <p className="text-red-600 text-sm mt-1">{errors.consulta.message}</p>
        )}
      </div>

      {/* ── Error del servidor ─────────────────── */}
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-md p-3 text-red-700 text-sm">
          {errorMessage}
        </div>
      )}

      {/* ── Submit ─────────────────────────────── */}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Enviando...' : 'Enviar consulta'}
      </button>

      <p className="text-xs text-text-muted text-center">
        Sus datos serán tratados con confidencialidad y utilizados exclusivamente
        para responder su consulta.
      </p>
    </form>
  );
}
