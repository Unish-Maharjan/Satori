import Header from "@/components/Header";
import Hero from "@/components/home/Hero";
import Immersive from "@/components/home/Immersive";
import FinalCTA from "@/components/home/FinalCTA";
import Footer from "@/components/Footer";
import About from "@/components/home/About";
import Listing from "@/components/home/Listing";
import Testimonials from "@/components/home/Testimonial";
import Kirant from "@/components/home/Kirant";


export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About/>
      <Immersive />  
      <Listing />
      <Kirant/>
      <Testimonials/>
      <FinalCTA />
      <Footer />
    </main>
  );
}

