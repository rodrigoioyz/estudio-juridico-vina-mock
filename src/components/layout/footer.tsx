import Link from 'next/link';
import Image from 'next/image';
import { assetPath } from '@/lib/asset-path';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/site-config';
import { telUrl } from '@/lib/contacto';

const FACEBOOK_SVG = (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.9h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94z" />
  </svg>
);

const INSTAGRAM_SVG = (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.8c-3.15 0-3.5.01-4.74.07-1.14.05-1.76.24-2.17.4-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.16.41-.35 1.03-.4 2.17-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.05 1.14.24 1.76.4 2.17.21.55.47.94.88 1.35.41.41.8.67 1.35.88.41.16 1.03.35 2.17.4 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c1.14-.05 1.76-.24 2.17-.4.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.16-.41.35-1.03.4-2.17.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.05-1.14-.24-1.76-.4-2.17a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.41-.16-1.03-.35-2.17-.4-1.24-.06-1.59-.07-4.74-.07zm0 3.07a4.97 4.97 0 1 1 0 9.94 4.97 4.97 0 0 1 0-9.94zm0 8.2a3.23 3.23 0 1 0 0-6.46 3.23 3.23 0 0 0 0 6.46zm6.33-8.4a1.16 1.16 0 1 1-2.32 0 1.16 1.16 0 0 1 2.32 0z" />
  </svg>
);

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  facebook: FACEBOOK_SVG,
  instagram: INSTAGRAM_SVG,
};

export function Footer() {
  const { contact } = SITE_CONFIG;

  return (
    <footer className="bg-primary text-white/80 py-12 mt-auto">
      <div className="container-wide grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + Info */}
        <div>
          <Image
            src={assetPath('/images/logo.png')}
            alt={SITE_CONFIG.name}
            width={60}
            height={60}
            className="mb-3 brightness-0 invert opacity-90"
          />
          <p className="text-sm">
            Especialistas en Derecho del Trabajo.
            <br />
            {SITE_CONFIG.location.city}, {SITE_CONFIG.location.region}.
          </p>
          {SOCIAL_LINKS.length > 0 && (
            <div className="footer-social">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.network}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${link.label} del estudio`}
                >
                  {SOCIAL_ICONS[link.network]}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Navegación */}
        <div>
          <p className="text-white font-semibold mb-3">Navegación</p>
          <nav className="space-y-2 text-sm" aria-label="Navegación del pie">
            <Link href="/estudio" className="block hover:text-white transition-colors">
              El Estudio
            </Link>
            <Link href="/areas" className="block hover:text-white transition-colors">
              Áreas de Práctica
            </Link>
            <Link href="/equipo" className="block hover:text-white transition-colors">
              Equipo
            </Link>
            <Link href="/empresas" className="block hover:text-white transition-colors">
              Empresas
            </Link>
            <Link href="/honorarios" className="block hover:text-white transition-colors">
              Honorarios
            </Link>
            <Link href="/publicaciones" className="block hover:text-white transition-colors">
              Publicaciones
            </Link>
          </nav>
        </div>

        {/* Contacto */}
        <div>
          <p className="text-white font-semibold mb-3">Contacto</p>
          <div className="space-y-2 text-sm">
            <p>
              <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors">
                {contact.email}
              </a>
            </p>
            <p>
              <a href={telUrl(contact.phone)} className="hover:text-white transition-colors">
                {contact.phone}
              </a>
            </p>
            <p className="text-white/70">{contact.address}</p>
            <p className="text-white/70">{contact.schedule}</p>
            <Link href="/contacto" className="inline-block text-white hover:underline transition-colors font-semibold mt-2">
              Cómo contactarnos →
            </Link>
          </div>
        </div>
      </div>

      <div className="container-wide mt-8 pt-6 border-t border-white/10 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {SITE_CONFIG.name}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
