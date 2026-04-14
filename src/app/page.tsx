import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Barbers from "@/components/sections/Barbers";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Kapcsolat from "@/components/sections/Kapcsolat";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Barbers />
      <Services />
      <Gallery />
      <Testimonials />
      <Kapcsolat />
    </main>
  );
}
