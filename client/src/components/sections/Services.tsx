import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SERVICES } from "@/lib/constants";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Services</h2>
          <p className="text-muted-foreground">
            Comprehensive data analytics solutions tailored to your business needs
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((service) => (
            <motion.div key={service.title} variants={fadeIn}>
              <Card className="group hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
