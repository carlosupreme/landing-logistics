import { motion } from "framer-motion";
import { Search, Package, MapPin, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Rastreo() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isTracking, setIsTracking] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      setIsTracking(true);
      // TODO: API call will go here
      setTimeout(() => {
        setIsTracking(false);
      }, 2000);
    }
  };

  return (
    <section id="rastreo" className="py-20 px-4 bg-white dark:bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium">
              Rastreo en Tiempo Real
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 lato-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 dark:from-blue-100 dark:to-blue-300">
              Rastrea tu Envío
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ingresa tu número de guía para conocer el estado y ubicación de tu paquete en tiempo real.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Tracking Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="p-8 rounded-2xl border bg-card shadow-lg">
              <form onSubmit={handleTrack} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Número de Guía
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                      placeholder="Ej: JBG123456789"
                      className="w-full px-4 py-3 pl-12 rounded-xl border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    />
                    <Package className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full py-6 text-base"
                  disabled={isTracking || !trackingNumber.trim()}
                >
                  {isTracking ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Rastreando...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Search className="w-5 h-5" />
                      Rastrear Paquete
                    </span>
                  )}
                </Button>
              </form>

              {/* Example tracking numbers */}
              <div className="mt-6 p-4 rounded-xl bg-muted/50">
                <p className="text-xs text-muted-foreground mb-2">
                  Prueba con estos números de ejemplo:
                </p>
                <div className="flex flex-wrap gap-2">
                  {["JBG123456789", "JBG987654321"].map((num) => (
                    <button
                      key={num}
                      onClick={() => setTrackingNumber(num)}
                      className="px-3 py-1 text-xs rounded-full bg-background hover:bg-accent transition-colors border"
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tracking Info / Mock Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="p-6 rounded-2xl border bg-card">
              <h3 className="text-lg font-bold mb-4 lato-bold">
                Estado del Envío
              </h3>

              <div className="space-y-6">
                {/* Timeline Item */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div className="w-0.5 h-full bg-border mt-2" />
                  </div>
                  <div className="flex-1 pb-6">
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="font-semibold">Entregado</h4>
                      <span className="text-xs text-muted-foreground">
                        Hoy 14:30
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Paquete entregado exitosamente
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      Ciudad de México, MX
                    </div>
                  </div>
                </div>

                {/* Timeline Item */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <Package className="w-5 h-5 text-white" />
                    </div>
                    <div className="w-0.5 h-full bg-border mt-2" />
                  </div>
                  <div className="flex-1 pb-6">
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="font-semibold">En Ruta de Entrega</h4>
                      <span className="text-xs text-muted-foreground">
                        Hoy 09:15
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      El paquete está en camino
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      Centro de Distribución - CDMX
                    </div>
                  </div>
                </div>

                {/* Timeline Item */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="font-semibold">En Tránsito</h4>
                      <span className="text-xs text-muted-foreground">
                        Ayer 18:45
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Procesado en centro de distribución
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      Guadalajara, JAL
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <p className="text-sm text-blue-900 dark:text-blue-100">
                💡 <strong>Nota:</strong> Los tiempos de entrega pueden variar según la ubicación y condiciones del servicio.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
