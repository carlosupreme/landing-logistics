import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfono",
    details: ["+52 (55) 1234-5678", "+1 (800) 123-4567"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["contacto@jbglogistics.com", "ventas@jbglogistics.com"],
  },
  {
    icon: MapPin,
    title: "Oficinas Centrales",
    details: ["Av. Reforma 123, CDMX", "Col. Juárez, C.P. 06600"],
  },
  {
    icon: Clock,
    title: "Horario de Atención",
    details: ["Lun - Vie: 8:00 AM - 8:00 PM", "Sáb: 9:00 AM - 2:00 PM"],
  },
];

export function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: API call will go here
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contacto" className="py-20 px-4 bg-gradient-to-b from-background to-blue-50/30 dark:to-blue-950/10">
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
              Contacto
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 lato-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 dark:from-blue-100 dark:to-blue-300">
              Estamos Aquí para Ayudarte
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes preguntas? Nuestro equipo está listo para brindarte la mejor atención y resolver todas tus dudas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 p-6 rounded-2xl border bg-card hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-2 lato-bold">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="h-64 rounded-2xl border bg-muted/50 overflow-hidden relative"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">
                    Mapa de ubicación
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    (Integración con Google Maps)
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-8 rounded-2xl border bg-card shadow-lg">
              <h3 className="text-2xl font-bold mb-6 lato-bold">
                Envíanos un Mensaje
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Juan Pérez"
                    className="w-full px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="juan@ejemplo.com"
                    className="w-full px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+52 123 456 7890"
                    className="w-full px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    className="w-full px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full py-6 text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Enviar Mensaje
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
