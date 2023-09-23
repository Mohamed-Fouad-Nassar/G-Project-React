import Landing from "../../components/Landing/Landing";
import Services from "../../components/Services/Services";
import Doctors from "../../components/Doctors/Doctors";
import Medicines from "../../components/Medicines/Medicines";
import Hospitals from "../../components/Hospitals/Hospitals";
import Pharmacies from "../../components/Pharmacies/Pharmacies";
import Blog from "../../components/Bolg/Blog";
import Charities from "../../components/Charities/Charities";
import Contact from "../../components/Contact/Contact";

import useSetTitle from "../../hooks/useSetTitle";

function Home() {
  useSetTitle("Hope");

  return (
    <>
      <Landing />
      <Services />
      <Doctors />
      <Medicines />
      <Hospitals />
      <Pharmacies />
      <Blog />
      <Charities />
      <Contact />
    </>
  );
}

export default Home;
