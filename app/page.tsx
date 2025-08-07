import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import BeforeAfter from "@/components/BeforeAfter";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <BeforeAfter />
      <Process />
      <Testimonials />
      <Footer />
    </main>
  );
}
