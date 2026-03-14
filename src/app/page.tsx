import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/projects/Projects";
import Technical from "@/components/technical/Technical";
import Work from "@/components/work/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Technical />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
