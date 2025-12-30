import { motion } from "framer-motion";
import {
  Package,
  Truck,
  Building2,
  Warehouse,
  Users,
  FileCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Package,
    title: "Paquetería",
    description:
      "Envíos rápidos y seguros de paquetes a nivel nacional e internacional con seguimiento en tiempo real.",
  },
  {
    icon: Truck,
    title: "Carga Comercial",
    description:
      "Transporte de carga comercial con capacidad para volúmenes grandes y entregas garantizadas.",
  },
  {
    icon: FileCheck,
    title: "Agencia Aduanal",
    description:
      "Gestión integral de trámites aduanales para importaciones y exportaciones sin complicaciones.",
  },
  {
    icon: Truck,
    title: "Transporte",
    description:
      "Soluciones de transporte terrestre con flota moderna y rutas optimizadas para máxima eficiencia.",
  },
  {
    icon: Warehouse,
    title: "Almacén",
    description:
      "Servicios de almacenamiento seguro con gestión de inventario y distribución especializada.",
  },
  {
    icon: Users,
    title: "Agentes Autorizados",
    description:
      "Red de agentes certificados y autorizados para garantizar la calidad en cada punto de servicio.",
  },
];

export function Servicios() {
  return (
    <section id="servicios" className="py-20 px-4 bg-gradient-to-b from-background to-blue-50/30 dark:to-blue-950/10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium">
              Nuestros Servicios
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 lato-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 dark:from-blue-100 dark:to-blue-300">
              Soluciones Integrales
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos servicios logísticos completos para cubrir todas tus necesidades de transporte y distribución.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative p-6 rounded-2xl border bg-card hover:bg-accent/5 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <div className="w-14 h-14 mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors lato-bold">
                  {service.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
