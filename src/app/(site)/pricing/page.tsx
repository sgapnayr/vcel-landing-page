import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import PricingGrids from "@/components/Pricing/PricingGrids";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Pricing | VCEL - The Relationship App for Long-Term Connections & Trust",
  description: "This is Pricing page for AI Tool",
  // other metadata
};

const PricingPage = () => {
  return (
    <>
      <Breadcrumb pageTitle="Pricing Page" />
      <section className="pb-20 pt-17.5 lg:pb-25 lg:pt-22.5 xl:pt-27.5">
        <PricingGrids />
      </section>

      <Faq />
    </>
  );
};

export default PricingPage;
