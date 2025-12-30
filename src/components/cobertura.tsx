import { motion } from "framer-motion";
import { Globe, MapPin } from "lucide-react";

const regions = [
  {
    name: "México",
    description: "Cobertura completa en todo el territorio mexicano",
    icon: "🇲🇽",
  },
  {
    name: "Centroamérica",
    description: "Presencia en todos los países centroamericanos",
    icon: "🌎",
  },
  {
    name: "Estados Unidos",
    description: "Conexiones directas con las principales ciudades",
    icon: "🇺🇸",
  },
  {
    name: "El Caribe",
    description: "Servicios especializados para las islas del Caribe",
    icon: "🏝️",
  },
  {
    name: "Sudamérica",
    description: "Red de distribución en todo el continente sur",
    icon: "🌎",
  },
  {
    name: "Europa",
    description: "Rutas directas a los principales puertos europeos",
    icon: "🇪🇺",
  },
  {
    name: "África",
    description: "Conexiones con los mercados emergentes africanos",
    icon: "🌍",
  },
];

export function Cobertura() {
  return (
    <section id="cobertura" className="py-20 px-4 bg-gradient-to-b from-blue-50/30 to-background dark:from-blue-950/10 dark:to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium">
              Cobertura Global
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 lato-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 dark:from-blue-100 dark:to-blue-300">
              Presencia Internacional
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conectamos el mundo con nuestra red de distribución global, llegando a más de 50 países en 7 regiones estratégicas.
          </p>
        </motion.div>

        {/* Globe Icon Center */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
            <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
              <Globe className="w-12 h-12 text-white animate-spin-slow" />
            </div>
          </div>
        </motion.div>

        {/* Regions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {regions.map((region, index) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group relative p-6 rounded-2xl border bg-card hover:bg-accent/5 transition-all duration-300 hover:shadow-lg cursor-pointer"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{region.icon}</span>
                  <MapPin className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors lato-bold">
                  {region.name}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {region.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            ¿Necesitas información sobre cobertura en tu región?
          </p>
          <button className="px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium">
            Consultar Disponibilidad
          </button>
        </motion.div>
      </div>
    </section>
  );
}
