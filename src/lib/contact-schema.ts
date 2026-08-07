// lib/contact-schema.ts
import { z } from 'zod';

export const contactSchema = z.object({
  nombre: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre es demasiado largo')
    .transform((s) => s.trim()),
  email: z
    .string()
    .email('Email inválido')
    .transform((s) => s.trim().toLowerCase()),
  telefono: z
    .string()
    .max(20, 'Teléfono demasiado largo')
    .optional()
    .transform((s) => s?.trim() || ''),
  area: z
    .string()
    .max(50)
    .optional()
    .transform((s) => s?.trim() || ''),
  consulta: z
    .string()
    .min(10, 'La consulta debe tener al menos 10 caracteres')
    .max(5000, 'La consulta es demasiado larga para este formulario')
    .transform((s) => s.trim()),
});

export type ContactFormData = z.infer<typeof contactSchema>;
