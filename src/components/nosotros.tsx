import { motion } from "framer-motion";
import { Target, Award, Users, TrendingUp } from "lucide-react";

const stats = [
  { value: "25+", label: "Años de Experiencia" },
  { value: "10K+", label: "Envíos Mensuales" },
  { value: "50+", label: "Países de Cobertura" },
  { value: "99.8%", label: "Satisfacción del Cliente" },
];

const values = [
  {
    icon: Target,
    title: "Misión",
    description:
      "Conectar el mundo a través de soluciones logísticas eficientes, confiables y sostenibles.",
  },
  {
    icon: Award,
    title: "Calidad",
    description:
      "Compromiso con la excelencia en cada envío, garantizando la satisfacción total de nuestros clientes.",
  },
  {
    icon: Users,
    title: "Equipo",
    description:
      "Profesionales altamente capacitados dedicados a brindar el mejor servicio en la industria.",
  },
  {
    icon: TrendingUp,
    title: "Innovación",
    description:
      "Tecnología de punta para optimizar procesos y ofrecer trazabilidad en tiempo real.",
  },
];

export function Nosotros() {
  return (
    <section id="nosotros" className="py-20 px-4 bg-white dark:bg-background">
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
              Sobre Nosotros
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 lato-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 dark:from-blue-100 dark:to-blue-300">
              Líderes en Logística
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Con más de dos décadas de experiencia, JBG Logistics se ha
            consolidado como un referente en soluciones de transporte y
            logística internacional, conectando continentes y facilitando el
            comercio global.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-950/20 border border-primary/10"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 lato-bold">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4 p-6 rounded-2xl border bg-card hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 lato-bold">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
