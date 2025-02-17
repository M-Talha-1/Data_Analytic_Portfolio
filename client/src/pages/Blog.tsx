import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BLOG_POSTS } from "@/lib/constants";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function Blog() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn}
          initial="initial"
          animate="animate"
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-muted-foreground">
            Insights and thoughts on data analytics, visualization, and more
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {BLOG_POSTS.map((post) => (
            <motion.div key={post.title} variants={fadeIn}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <time className="text-sm text-muted-foreground">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h2 className="text-xl font-semibold mt-2 mb-3">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
