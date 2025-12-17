import PartnersSection from "./components/AcademyPartners/AcademyPartners";
import AmazingMomentsSection from "./components/AmazingMoment/AmazingMoment";
import BlogSection from "./components/Blogs/Blogs";
import FAQ from "./components/FAQ/FAQ";
import AcademyProgramSection from "./components/FindOurGame/FindOurGame";
import HeroSection from "./components/heroSection/heroSection";
import OnGoingTournamentsSection from "./components/OnGoingTournament/OnGoingTournament";
import OurGoal from "./components/OurGoal/OurGoal";
import StayConnectedSection from "./components/StayConnected/StayConnected";
import TestimonialSlider from "./components/Testimonial/Testimonial";
import UpcomingMatche from "./components/upcomingMatch/UpcomingMatche";
import JoinSection from "./components/WantToBePart/WantToBePart";
import YouCantWinUnless from "./components/YouCan'tWinUnless/YouCan'tWinUnless";

export default function Home() {
  return (
    <div className="">
      <HeroSection></HeroSection>
      <UpcomingMatche></UpcomingMatche>
      <OurGoal></OurGoal>
      <AcademyProgramSection></AcademyProgramSection>
      <StayConnectedSection></StayConnectedSection>
      <AmazingMomentsSection></AmazingMomentsSection>
      <YouCantWinUnless></YouCantWinUnless>
      <OnGoingTournamentsSection></OnGoingTournamentsSection>
      <PartnersSection></PartnersSection>
      <TestimonialSlider></TestimonialSlider>
      <FAQ></FAQ>
      <BlogSection></BlogSection>
      <JoinSection></JoinSection>
      <div className="hidden"></div>
    </div>
  );
}
