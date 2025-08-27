import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Home/Clients";
import Features from "@/components/Home/Features";
import FeaturesList from "@/components/Home/FeaturesList";
import Hero from "@/components/Home/Hero";
import Reviews from "@/components/Home/Reviews";
import Pricing from "@/components/Pricing";
import Support from "@/components/Support";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VCEL - The Relationship App for Long-Term Connections & Trust ",
  description: "This is Home for the Relationship Tool",
};

export default function Home() {
  return (
    <>
      {/* <NextSeo
        title="VCEL - The Relationship App for Long-Term Connections & Trust"
        description="A short description goes here."
      /> */}
      <Hero />
      <Features />
      <FeaturesList />
      <Pricing />
      <section className="relative z-20 overflow-hidden pb-20 pt-22.5 lg:pt-27.5 xl:pt-32.5 2xl:pt-45">
        <Reviews />
      </section>
      <Clients />
      <Support />
    </>
  );
}
