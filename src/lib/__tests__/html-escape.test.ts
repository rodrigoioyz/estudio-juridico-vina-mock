import { describe, expect, it } from 'vitest';
import { escapeHtml, sanitizeEmailHeader } from '../html-escape';

describe('escapeHtml', () => {
  it('escapa todos los caracteres con significado HTML', () => {
    expect(escapeHtml(`<script>alert("x")</script> & 'prueba'`)).toBe(
      '&lt;script&gt;alert(&quot;x&quot;)&lt;/script&gt; &amp; &#39;prueba&#39;',
    );
  });

  it('conserva texto jurídico y caracteres españoles', () => {
    expect(escapeHtml('Despido injustificado — remuneración $553.553')).toBe(
      'Despido injustificado — remuneración $553.553',
    );
  });

  it('elimina saltos de línea y controles de cabeceras de correo', () => {
    expect(sanitizeEmailHeader('Nombre\r\nBcc: atacante@example.com')).toBe(
      'Nombre Bcc: atacante@example.com',
    );
  });
});
