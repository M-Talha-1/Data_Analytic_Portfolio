import { ReactNode } from "react";
import Navigation from "./Navigation";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>{children}</main>
      <footer className="py-8 bg-primary text-primary-foreground">
        <div className="container text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Data Analytics Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
