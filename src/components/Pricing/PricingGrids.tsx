import SectionTitle from "../Common/SectionTitle";
import SinglePricing from "./SinglePricing";
import { pricingData } from "../../../stripe/pricingData";

const PricingGrids = () => {
  return (
    <div>
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <SectionTitle
          subTitle="Get Started Today"
          title="Our Pricing Plans"
          paragraph="Choose the best plan that suits your relationship journey. VeeSell offers flexible pricing options to help couples invest in their connection, set goals, and track milestones."
        />
        <div className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-3">
          {pricingData &&
            pricingData.map((price, key) => (
              <SinglePricing price={price} key={key} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default PricingGrids;
