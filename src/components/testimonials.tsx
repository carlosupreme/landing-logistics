import { TestimonialsColumn } from "@/components/blocks/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "JBG Logistics transformó nuestra cadena de suministro. Entregas puntuales y seguimiento en tiempo real que nos da total tranquilidad.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "María Fernández",
    role: "Directora de Operaciones",
  },
  {
    text: "El servicio de agencia aduanal es excepcional. Simplificaron todos nuestros trámites de importación y exportación.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Carlos Méndez",
    role: "Gerente de Comercio Exterior",
  },
  {
    text: "Profesionalismo y confiabilidad en cada envío. Su red de cobertura internacional nos ha permitido expandir nuestro negocio.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Ana Rodríguez",
    role: "CEO",
  },
  {
    text: "La plataforma de rastreo es intuitiva y precisa. Siempre sabemos dónde está nuestra mercancía en tiempo real.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Roberto Sánchez",
    role: "Jefe de Logística",
  },
  {
    text: "Excelente servicio de almacenamiento. Nuestros productos están seguros y la gestión de inventario es impecable.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Laura Martínez",
    role: "Gerente de Almacén",
  },
  {
    text: "Atención al cliente de primera. Siempre dispuestos a resolver cualquier situación y brindar soluciones rápidas.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Patricia Gómez",
    role: "Directora Comercial",
  },
  {
    text: "Costos competitivos y servicio premium. La mejor relación calidad-precio del mercado logístico.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Miguel Torres",
    role: "Director Financiero",
  },
  {
    text: "Su red de agentes autorizados garantiza calidad en cada punto. Confiamos plenamente en su servicio.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sofía Ramírez",
    role: "Gerente de Ventas",
  },
  {
    text: "Desde paquetería hasta carga comercial, manejan todo con la misma eficiencia y profesionalismo. Altamente recomendados.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Diego Herrera",
    role: "Director de Operaciones",
  },
];


const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);


export default function Testimonials () {
  return (
    <section id="testimonios" className="bg-background py-20 px-4 relative">

      <div className="container z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center mb-4">
            <span className="px-4 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium">
              Testimonios
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 lato-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 dark:from-blue-100 dark:to-blue-300">
              Lo que Dicen Nuestros Clientes
            </span>
          </h2>
          <p className="text-center text-lg text-muted-foreground">
            Conoce las experiencias de quienes confían en nosotros.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};
