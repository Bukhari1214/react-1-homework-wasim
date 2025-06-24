// import styles from "./page.module.css";
// TASK - React 1 week 1
// After you are finished with creating the page, move the OurValues, OurCrew, OurPartners components into their own files
// OurValues.js, OurCrew.js, OurPartners.js should live in this folder
// import and use the components from the newly created files

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

        {/* TASK - React 1 week 1 */}
        {/* Add in the "OurPartners" component here */}
      </main>
    </div>
  );
};

export default Crew;
