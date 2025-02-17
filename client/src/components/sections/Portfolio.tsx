import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PORTFOLIO_ITEMS } from "@/lib/constants";
import { fadeIn, staggerContainer, scaleIn } from "@/lib/animations";

const categories = ["All", "Visualization", "Data Analysis", "Predictive Analytics"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = PORTFOLIO_ITEMS.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
          <p className="text-muted-foreground mb-8">
            Explore my latest data analytics projects and case studies
          </p>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item) => (
            <motion.div key={item.title} variants={scaleIn}>
              <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="text-white text-center p-4">
                        <h3 className="font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
