"use client";

import CTA from "@/components/home/CTA";
import GallerySection from "@/components/home/GallerySection";
import Hero from "@/components/home/Hero";
import ServiceAreas from "@/components/home/ServiceAreas";
import ServicesPreview from "@/components/home/ServicesPreview";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";


export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <GallerySection/>
      <WhyChooseUs />
      {/* <HowItWorks /> */}
      <Testimonials />
      <ServiceAreas />
      <CTA />
    </>
  );
}