import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/about/Hero";
import WhoWeAre from "@/components/about/WhoAreWe";
import WhatDrivesUs from "@/components/about/Drive";
import Pathway from "@/components/about/Pathway";
import FinalCTA from "@/components/home/FinalCTA";

export default function About() {
  return (
    <main className="relative">
      <Header/>
      <Hero/>
      <WhoWeAre/>
      <WhatDrivesUs/>
      <Pathway/>
      <FinalCTA/>
      <Footer/> 
    </main>
  );
}