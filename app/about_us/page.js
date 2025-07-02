import OurCrew from "@/components/crew/OurCrew";
import OurPartners from "@/components/partners/OurPartners";
import OurValues from "@/components/values/OurValues";

export const Crew = () => {
  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>About us</h1>
        <section className="card">
          <OurValues />
        </section>
        <section className="card">
          <OurCrew />
        </section>
        <section className="card">
          <OurPartners />
        </section>
      </main>
    </div>
  );
};

export default Crew;
