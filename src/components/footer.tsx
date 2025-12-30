import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  servicios: [
    { name: "Paquetería", href: "#servicios" },
    { name: "Carga Comercial", href: "#servicios" },
    { name: "Agencia Aduanal", href: "#servicios" },
    { name: "Transporte", href: "#servicios" },
  ],
  empresa: [
    { name: "Sobre Nosotros", href: "#nosotros" },
    { name: "Cobertura", href: "#cobertura" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "Contacto", href: "#contacto" },
  ],
  legal: [
    { name: "Términos y Condiciones", href: "#" },
    { name: "Política de Privacidad", href: "#" },
    { name: "Aviso Legal", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-blue-950 to-blue-900 dark:from-blue-950 dark:to-black text-white">
      <div className="container mx-auto max-w-6xl px-4 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 lato-bold">JBG Logistics</h3>
            <p className="text-blue-100 text-sm mb-6 leading-relaxed">
              Conectando el mundo con soluciones logísticas eficientes y
              confiables desde hace más de 25 años.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-blue-100 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-bold mb-4 lato-bold">Servicios</h4>
            <ul className="space-y-2">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-blue-100 hover:text-white text-sm transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold mb-4 lato-bold">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-blue-100 hover:text-white text-sm transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="font-bold mb-4 lato-bold">Newsletter</h4>
            <p className="text-blue-100 text-sm mb-4">
              Suscríbete para recibir noticias y promociones.
            </p>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full px-4 py-2 pr-10 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30 text-sm"
                />
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-200" />
              </div>
              <button className="px-4 py-2 rounded-lg bg-white text-blue-900 hover:bg-blue-50 transition-colors font-medium text-sm whitespace-nowrap">
                Suscribir
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-100 text-sm">
            © {currentYear} JBG Logistics. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-blue-100 hover:text-white text-sm transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
