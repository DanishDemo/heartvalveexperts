import AppointmentCTA from "@/component/AppointmentCTA";
import Doctors from "@/component/Doctors";
import HeroSection from "@/component/HeroSection";
import HospitalCarousel from "@/component/HospitalCarousel";
import InnovationCardiacCare from "@/component/InnovationCardiacCare";
import InnovationCarousel from "@/component/InnovationCarousel";
import PatientSuccessStories from "@/component/PatientSuccessStories";
import WhoWeAreHero from "@/component/WhoWeAreHero";
import WhyChooseHVE from "@/component/WhyChooseHVE";


export default function Home() {
  return (
   <>
    <HeroSection/>
    <WhoWeAreHero/>
    <WhyChooseHVE />
    <Doctors/>
    <InnovationCardiacCare/>
    <PatientSuccessStories />
    <InnovationCarousel />
    <AppointmentCTA/>  
    <HospitalCarousel/>
   </>
  );
}
