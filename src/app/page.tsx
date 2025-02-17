"use client";

import { useEffect } from "react";
import { useRef } from "react";

import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos";

import Contactus from "@/components/Home/Contactus";
import Estimate from "@/components/Home/Estimate";
import Hero from "@/components/Home/Hero";
import OurCLient from "@/components/Home/OurCLient";
import TeamSupport from "@/components/Home/TeamSupport";
import WhatWeOffer from "@/components/Home/WhatWeOffer";
import WhoWeAre from "@/components/Home/WhoWeAre";
import YearsService from "@/components/Home/YearsService";

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);
  const scrollCallback = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <main className="bg-[#191A05] min-h-screen">
      <Hero scrollCallback={scrollCallback} />
      {/* <Estimate /> */}
      <WhoWeAre scrollCallback={scrollCallback} />
      <YearsService />
      <WhatWeOffer />
      <OurCLient />
      <TeamSupport />
      <Contactus refProps={contactRef} />
    </main>
  );
}
