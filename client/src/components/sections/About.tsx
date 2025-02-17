import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { fadeIn, staggerContainer } from "@/lib/animations";

const timeline = [
  {
    year: "2024",
    role: "Lead Data Scientist",
    description: "Leading data science initiatives and mentoring team members",
  },
  {
    year: "2023",
    role: "Senior Data Analyst",
    description: "Developed predictive models and optimization algorithms",
  },
  {
    year: "2022",
    role: "Data Analyst",
    description: "Conducted statistical analysis and created dashboards",
  },
  {
    year: "2021",
    role: "Junior Analyst",
    description: "Started career in data analytics and visualization",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground">
            With over 3 years of experience in data analytics, I help organizations
            make data-driven decisions through advanced analytics and visualization.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {timeline.map((item) => (
            <motion.div key={item.year} variants={fadeIn}>
              <Card>
                <CardContent className="pt-6">
                  <span className="text-primary font-bold text-xl mb-2 block">
                    {item.year}
                  </span>
                  <h3 className="font-semibold mb-2">{item.role}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
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
