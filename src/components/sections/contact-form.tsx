'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { contactSchema, type ContactFormData } from '@/lib/contact-schema';

const AREA_OPTIONS = [
  { value: '', label: 'Seleccione un área (opcional)' },
  { value: 'Terminación del contrato', label: 'Terminación del contrato' },
  { value: 'Remuneraciones', label: 'Remuneraciones' },
  { value: 'Derechos fundamentales', label: 'Derechos fundamentales' },
  { value: 'Relación laboral', label: 'Relación laboral' },
  { value: 'Derecho colectivo', label: 'Derecho colectivo' },
  { value: 'Empresas', label: 'Empresas y cumplimiento' },
  { value: 'Otro', label: 'Otro' },
];

const isGitHubPagesDemo = process.env.NEXT_PUBLIC_GITHUB_PAGES_DEMO === 'true';

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
    mode: 'onBlur',
    shouldFocusError: true,
    defaultValues: { nombre: '', email: '', telefono: '', area: '', consulta: '' },
  });

  async function onSubmit(data: ContactFormData) {
    setStatus('sending');
    setErrorMessage('');

    if (isGitHubPagesDemo) {
      setStatus('success');
      reset();
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'No fue posible enviar el formulario.');
      }

      setStatus('success');
      reset();
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'Ocurrió un error inesperado. Intente nuevamente.',
      );
    }
  }

  if (status === 'success') {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <span className="form-status-mark" aria-hidden="true">✓</span>
        <p className="eyebrow">{isGitHubPagesDemo ? 'Versión de demostración' : 'Consulta recibida'}</p>
        <h3>{isGitHubPagesDemo ? 'Formulario de muestra.' : 'Gracias por escribirnos.'}</h3>
        <p>
          {isGitHubPagesDemo
            ? 'Este mock público no envía correos ni registra antecedentes. Para una consulta real, utilice el sitio institucional.'
            : 'Revisaremos los antecedentes y responderemos al correo indicado. El envío del formulario no constituye aceptación del caso ni genera una relación abogado-cliente.'}
        </p>
        <button type="button" className="ruled-link form-reset" onClick={() => setStatus('idle')}>
          Enviar otra consulta
        </button>
      </div>
    );
  }

  const fieldState = (name: 'nombre' | 'email' | 'telefono' | 'consulta') => {
    switch (name) {
      case 'nombre': return errors.nombre ? 'true' : 'false';
      case 'email': return errors.email ? 'true' : 'false';
      case 'telefono': return errors.telefono ? 'true' : 'false';
      case 'consulta': return errors.consulta ? 'true' : 'false';
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form" noValidate>
      <div className="form-intro">
        <p className="eyebrow">Evaluación inicial</p>
        <h2>Cuéntenos brevemente su situación</h2>
        <p>Los campos marcados con <span aria-hidden="true">*</span><span className="sr-only">asterisco</span> son obligatorios.</p>
      </div>

      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="nombre">Nombre completo <span aria-hidden="true">*</span></label>
          <input
            id="nombre"
            type="text"
            autoComplete="name"
            required
            aria-invalid={fieldState('nombre')}
            aria-describedby={errors.nombre ? 'nombre-error' : undefined}
            {...register('nombre')}
          />
          {errors.nombre && <p id="nombre-error" className="form-error" role="alert">{errors.nombre.message}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="email">Correo electrónico <span aria-hidden="true">*</span></label>
          <input
            id="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            aria-invalid={fieldState('email')}
            aria-describedby={errors.email ? 'email-error' : undefined}
            {...register('email')}
          />
          {errors.email && <p id="email-error" className="form-error" role="alert">{errors.email.message}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="telefono">Teléfono <span className="field-optional">Opcional</span></label>
          <input
            id="telefono"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="Ej.: +56 9 1234 5678"
            aria-invalid={fieldState('telefono')}
            aria-describedby={errors.telefono ? 'telefono-error' : 'telefono-help'}
            {...register('telefono')}
          />
          <p id="telefono-help" className="form-help">Solo si prefiere que le contactemos por esta vía.</p>
          {errors.telefono && <p id="telefono-error" className="form-error" role="alert">{errors.telefono.message}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="area">Área de consulta <span className="field-optional">Opcional</span></label>
          <select id="area" autoComplete="off" {...register('area')}>
            {AREA_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>

        <div className="form-field form-field-full">
          <label htmlFor="consulta">Consulta <span aria-hidden="true">*</span></label>
          <textarea
            id="consulta"
            rows={7}
            required
            aria-invalid={fieldState('consulta')}
            aria-describedby={errors.consulta ? 'consulta-error' : 'consulta-help'}
            placeholder="Describa los hechos principales, las fechas relevantes y qué necesita resolver. No incluya datos sensibles innecesarios."
            {...register('consulta')}
          />
          <p id="consulta-help" className="form-help">Entre 10 y 5.000 caracteres.</p>
          {errors.consulta && <p id="consulta-error" className="form-error" role="alert">{errors.consulta.message}</p>}
        </div>
      </div>

      {status === 'error' && (
        <div className="form-server-error" role="alert" aria-live="assertive">
          <strong>No pudimos enviar su consulta.</strong>
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="form-actions">
        <button type="submit" disabled={status === 'sending'} className="cta-primary form-submit">
          {status === 'sending' ? 'Enviando…' : 'Enviar consulta'}
        </button>
        <p>
          La información será utilizada exclusivamente para responder esta solicitud y será tratada
          con confidencialidad.
        </p>
      </div>
    </form>
  );
}
