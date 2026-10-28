import { describe, expect, it } from 'vitest';
import { getPublicContactEmail, getPublicSiteUrl, SITE_CONFIG } from '../site-config';

describe('configuración institucional pública', () => {
  it('no expone datos de marcador de posición', () => {
    const values = [
      SITE_CONFIG.contact.email,
      SITE_CONFIG.contact.phone,
      SITE_CONFIG.contact.phoneSecondary,
      SITE_CONFIG.contact.whatsapp,
    ];

    for (const value of values) {
      expect(value === null || !/X{2,}|\.local/i.test(value)).toBe(true);
    }
  });

  it('expone los teléfonos reales y mantiene WhatsApp no validado como null', () => {
    expect(SITE_CONFIG.contact.phone).toBe('+56 9 7378 1151');
    expect(SITE_CONFIG.contact.phoneSecondary).toBe('+56 9 4563 1394');
    expect(SITE_CONFIG.contact.whatsapp).toBeNull();
  });

  it('usa el correo institucional real como fallback público', () => {
    expect(getPublicContactEmail('abogados@estudiojuridico.local')).toBe(
      'contacto@estudiovina.cl',
    );
    expect(getPublicContactEmail('contacto@ejemplo.cl')).toBe('contacto@ejemplo.cl');
  });

  it('reemplaza localhost en producción, pero lo conserva durante desarrollo', () => {
    expect(getPublicSiteUrl('http://localhost:3000', false)).toBe(
      'https://www.estudiovina.cl',
    );
    expect(getPublicSiteUrl('http://localhost:3000/', true)).toBe('http://localhost:3000');
  });
});
