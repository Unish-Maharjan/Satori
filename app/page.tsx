import Header from "@/components/Header";
import Hero from "@/components/home/Hero";
import Immersive from "@/components/home/Immersive";
import Mega from "@/components/home/Mega";
import FinalCTA from "@/components/home/FinalCTA";
import Footer from "@/components/Footer";
import About from "@/components/home/About";
import Listing from "@/components/home/Listing";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Mega />
      <Immersive />
      <About/>
      <Listing />
      <FinalCTA />
      <Footer />
    </main>
  );
}

