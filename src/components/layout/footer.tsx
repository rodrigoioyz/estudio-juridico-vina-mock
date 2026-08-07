import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/site-config';

export function Footer() {
  return (
    <footer className="bg-primary text-white/80 py-12 mt-auto">
      <div className="container-wide grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + Info */}
        <div>
          <Image
            src="/images/logo.png"
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
        </div>

        {/* Navegación */}
        <div>
          <h4 className="text-white font-semibold mb-3">Navegación</h4>
          <nav className="space-y-2 text-sm">
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
            <Link href="/publicaciones" className="block hover:text-white transition-colors">
              Publicaciones
            </Link>
          </nav>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contacto</h4>
          <div className="space-y-2 text-sm">
            <p>
              <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-white transition-colors">
                {SITE_CONFIG.contact.email}
              </a>
            </p>
            <Link href="/contacto" className="inline-block text-accent hover:text-white transition-colors font-semibold mt-2">
              Formulario de contacto →
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
