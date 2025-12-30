import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Star, Package, Clock, Globe } from "lucide-react";

export default function LogisticsHero() {
  return (
    <section className="relative w-full h-[calc(100vh-64px)] min-h-[600px] overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/trailer.jpg"
          alt="Professional logistics and cargo services"
          className="w-full h-full object-cover opacity-40"
        />
        {/* Professional Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl text-center flex flex-col items-center -mt-48 md:-mt-56"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground text-sm font-medium backdrop-blur-sm">
              <Globe className="w-4 h-4" />
              Servicios Logísticos Internacionales
            </span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight leading-[1.1]">
            JBG{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300">
              Logistics
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl font-light leading-relaxed"
          >
            Soluciones logísticas completas con cobertura global y tecnología de vanguardia
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 md:gap-8 mb-10"
          >
            <div className="flex items-center gap-2 text-white/80">
              <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <Package className="w-5 h-5 text-blue-300" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-xs text-white/70">Países</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-blue-300" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-xs text-white/70">Soporte</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">4.9</div>
                <div className="text-xs text-white/70">Rating</div>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-8 py-6 text-lg font-semibold shadow-2xl shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 hover:scale-105 group"
              onClick={() => window.location.href = '#servicios'}
            >
              Cotizar Envío
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 rounded-xl px-8 py-6 text-lg font-semibold backdrop-blur-md transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = '#rastreo'}
            >
              Rastrear Envío
            </Button>
          </motion.div>
        </motion.div>

        {/* Professional Review Card - Bottom Left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-8 left-8 z-20 bg-white/10 backdrop-blur-xl rounded-2xl p-6 max-w-sm border border-white/20 shadow-2xl hidden lg:block"
        >
          {/* Trust Badge */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex -space-x-3">
              <img
                src="https://i.pravatar.cc/150?img=1"
                alt="Cliente satisfecho"
                className="w-12 h-12 rounded-full border-3 border-white shadow-lg ring-2 ring-white/20"
              />
              <img
                src="https://i.pravatar.cc/150?img=5"
                alt="Cliente satisfecho"
                className="w-12 h-12 rounded-full border-3 border-white shadow-lg ring-2 ring-white/20"
              />
              <img
                src="https://i.pravatar.cc/150?img=7"
                alt="Cliente satisfecho"
                className="w-12 h-12 rounded-full border-3 border-white shadow-lg ring-2 ring-white/20"
              />
            </div>

            {/* Stars and Count */}
            <div className="flex flex-col">
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-white font-semibold text-sm">
                <span className="text-lg">4.9</span> de 5.0
              </p>
            </div>
          </div>

          {/* Review Text */}
          <p className="text-white/90 text-sm leading-relaxed mb-3">
            "Servicio excepcional con entregas puntuales y atención personalizada. La mejor opción para logística internacional."
          </p>

          <div className="flex items-center justify-between pt-3 border-t border-white/10">
            <span className="text-white/70 text-xs">+20,000 clientes</span>
            <span className="text-white/70 text-xs">Verificado</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute bottom-8 right-8 z-20"
      >
        <button
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            });
          }}
          className="w-12 h-12 rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all duration-300 group"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-5 h-5 text-white/70 group-hover:text-white animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
}
