import { FC } from "react";
import { IntroductorySection } from "../components/introductory-section/IntroductorySection";
import { HealthReminding } from "../components/health-reminding/HealthReminding";
import { ServicesSection } from "../components/services-section/ServicesSection";
import { MakeAppointmentSection } from "../components/make-appointment-section/MakeAppointmentSection";
import { useMediaQuery } from "usehooks-ts";

const MainPage: FC = () => {
  const smallScreen = useMediaQuery("(max-width: 1024px)");
  return (
    <>
      <IntroductorySection />
      <HealthReminding />
      <ServicesSection />
      {!smallScreen && <MakeAppointmentSection />}
    </>
  );
};

export default MainPage;
