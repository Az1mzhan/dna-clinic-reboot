import { FC } from "react";
import { IntroductorySection } from "../components/introductory-section/IntroductorySection";
import { HealthReminding } from "../components/health-reminding/HealthReminding";
import { ServicesSection } from "../components/services-section/ServicesSection";
import { MakeAppointmentSection } from "../components/make-appointment-section/MakeAppointmentSection";

const MainPage: FC = () => {
  return (
    <>
      <IntroductorySection />
      <HealthReminding />
      <ServicesSection />
      <MakeAppointmentSection />
    </>
  );
};

export default MainPage;
