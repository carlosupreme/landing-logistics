import {
  Package,
  Truck,
  Warehouse,
  Users,
  FileCheck,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Feature {
  id: string;
  icon: React.ReactNode;
  heading: string;
  description: string;
  image: string;
  url: string;
  isDefault: boolean;
}

interface Feature51Props {
  features?: Feature[];
  className?: string;
}

const Feature51 = ({
  features = [
    {
      id: "paqueteria",
      heading: "Paquetería",
      icon: <Package className="size-4" />,
      description:
        "Envíos rápidos y seguros de paquetes a nivel nacional e internacional con seguimiento en tiempo real.",
      image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=2065&auto=format&fit=crop",
      url: "#",
      isDefault: true,
    },
    {
      id: "carga-comercial",
      icon: <Truck className="size-4" />,
      heading: "Carga Comercial",
      description:
        "Transporte de carga comercial con capacidad para volúmenes grandes y entregas garantizadas.",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop",
      url: "#",
      isDefault: false,
    },
    {
      id: "agencia-aduanal",
      icon: <FileCheck className="size-4" />,
      heading: "Agencia Aduanal",
      description:
        "Gestión integral de trámites aduanales para importaciones y exportaciones sin complicaciones.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
      url: "#",
      isDefault: false,
    },
    {
      id: "transporte",
      icon: <Truck className="size-4" />,
      heading: "Transporte",
      description:
        "Soluciones de transporte terrestre con flota moderna y rutas optimizadas para máxima eficiencia.",
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2076&auto=format&fit=crop",
      url: "#",
      isDefault: false,
    },
    {
      id: "almacen",
      icon: <Warehouse className="size-4" />,
      heading: "Almacén",
      description:
        "Servicios de almacenamiento seguro con gestión de inventario y distribución especializada.",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop",
      url: "#",
      isDefault: false,
    },
    {
      id: "agentes-autorizados",
      icon: <Users className="size-4" />,
      heading: "Agentes Autorizados",
      description:
        "Red de agentes certificados y autorizados para garantizar la calidad en cada punto de servicio.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
      url: "#",
      isDefault: false,
    },
  ],
  className,
}: Feature51Props) => {
  const defaultTab =
    features.find((tab) => tab.isDefault)?.id || features[0].id;

  return (
    <section id="servicios" className={cn("py-32 bg-gradient-to-b from-background to-blue-50/30 dark:to-blue-950/10", className)}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium">
              Nuestros Servicios
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 dark:from-blue-100 dark:to-blue-300">
              Soluciones Integrales
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos servicios logísticos completos para cubrir todas tus necesidades de transporte y distribución.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue={defaultTab} className="p-0">
            <TabsList className="flex h-auto w-full flex-col gap-2 bg-background p-0 md:flex-row md:flex-wrap lg:grid lg:grid-cols-3">
              {features.map((tab) => {
                return (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className={`group flex w-full flex-col items-start justify-start gap-1 rounded-md border p-4 text-left whitespace-normal shadow-none transition-all duration-200 hover:border-primary/50 hover:bg-primary/5 data-[state=active]:bg-primary/10 data-[state=active]:border-primary data-[state=active]:shadow-none ${
                      tab.isDefault ? "" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
                      {tab.icon && (
                        <span className="flex size-8 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all duration-200 group-data-[state=active]:bg-primary group-data-[state=active]:text-primary-foreground lg:size-10">
                          {tab.icon}
                        </span>
                      )}
                      <p className="text-lg font-semibold transition-opacity duration-200 md:text-xl lg:text-lg">
                        {tab.heading}
                      </p>
                    </div>
                    <p className="font-normal text-sm text-muted-foreground transition-opacity duration-200 md:block">
                      {tab.description}
                    </p>
                  </TabsTrigger>
                );
              })}
            </TabsList>
            {features.map((tab) => (
              <TabsContent
                key={tab.id}
                value={tab.id}
                className="transition-opacity duration-300 mt-6 px-2"
              >
                <div className="overflow-hidden rounded-xl shadow-2xl">
                  <img
                    src={tab.image}
                    alt={tab.heading}
                    className="aspect-video w-full object-cover transition-opacity duration-300"
                  />
                </div>
              </TabsContent>
            ))}
        </Tabs>
      </div>
    </section>
  );
};

export { Feature51 };
