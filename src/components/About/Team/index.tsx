import SectionTitle from "@/components/Common/SectionTitle";
import SingleTeam from "./SingleTeam";
import teamData from "./teamData";

const Team = () => {
  return (
    <section className="overflow-hidden py-17.5 lg:py-22.5 xl:py-27.5">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <SectionTitle
          subTitle="Meet Our Team"
          title="The People Behind VCel"
          paragraph="Get to know the passionate team dedicated to helping couples build stronger, long-lasting relationships through innovation and thoughtful design."
        />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-17.5 xl:grid-cols-4">
          {teamData.map((team) => (
            <SingleTeam key={team.id} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
