import { describe, expect, it } from 'vitest';
import { getPublicContactEmail, getPublicSiteUrl, SITE_CONFIG } from '../site-config';

describe('configuración institucional pública', () => {
  it('no expone teléfono ni WhatsApp de marcador de posición', () => {
    const values = [
      SITE_CONFIG.contact.email,
      SITE_CONFIG.contact.phone,
      SITE_CONFIG.contact.whatsapp,
    ];

    for (const value of values) {
      expect(value === null || !/X{2,}|\.local/i.test(value)).toBe(true);
    }
  });

  it('mantiene canales no validados como null', () => {
    expect(SITE_CONFIG.contact.phone).toBeNull();
    expect(SITE_CONFIG.contact.whatsapp).toBeNull();
  });

  it('nunca usa un destinatario interno .local como correo público', () => {
    expect(getPublicContactEmail('abogados@estudiojuridico.local')).toBe(
      'contacto@estudiojuridicolaboral.cl',
    );
    expect(getPublicContactEmail('contacto@ejemplo.cl')).toBe('contacto@ejemplo.cl');
  });

  it('reemplaza localhost en producción, pero lo conserva durante desarrollo', () => {
    expect(getPublicSiteUrl('http://localhost:3000', false)).toBe(
      'https://estudiojuridicolaboral.cl',
    );
    expect(getPublicSiteUrl('http://localhost:3000/', true)).toBe('http://localhost:3000');
  });
});
