import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technical from "./components/technical/Technical";
import Work from "./components/work/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Technical />
      <Work />
      <Contact />
      <Footer />
    </div>
  )
}
