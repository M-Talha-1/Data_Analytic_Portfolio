import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { fadeIn, staggerContainer } from "@/lib/animations";

const timeline = [
  {
    year: "2024",
    title: "Senior Data Analytics Expert",
    description: "Machine learning and advanced analytics",
  },
  {
    year: "2023",
    title: "Lead Data Analyst",
    description: "Team leadership and project management",
  },
  {
    year: "2022",
    title: "Data Analyst",
    description: "Statistical analysis and visualization",
  },
  {
    year: "2021",
    title: "Junior Analyst",
    description: "Data processing and reporting",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <div className="prose prose-lg">
              <p className="text-muted-foreground">
                As a dedicated Data Analytics Expert with 4 years of experience,
                I specialize in transforming complex data into actionable insights.
                My journey in data analytics has equipped me with expertise in
                statistical analysis, machine learning, and data visualization.
              </p>
              <p className="text-muted-foreground">
                I'm passionate about helping organizations make data-driven
                decisions that drive growth and innovation. My approach combines
                technical expertise with clear communication to deliver results
                that matter.
              </p>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute left-8 top-0 bottom-0 w-px bg-primary/20" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                variants={fadeIn}
                className="relative mb-8 last:mb-0 pl-16"
              >
                <div className="absolute left-7 w-2 h-2 rounded-full bg-primary transform -translate-x-1/2 mt-2" />
                <Card className="relative">
                  <CardContent className="pt-6">
                    <span className="text-primary font-bold text-xl mb-2 block">
                      {item.year}
                    </span>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}