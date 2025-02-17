import Header from "../components/home/Header";
import HeroSection from "../components/home/HeroSection";
import TrustedBySection from "../components/home/TrustedBy";
import PopularServices from "../components/home/PopularServices";
import TalentSection from "../components/home/TalentSection";
import Testimonials from "../components/home/Testimonials";
import ExploreMarketplace from "../components/home/ExploreMarketplace";
import Footer from "../components/home/Footer";


const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <TrustedBySection />
      <PopularServices />
      <TalentSection/>
      <Testimonials/>
      <ExploreMarketplace/>
      <Footer/>
    </div>
  );
};

export default Home;
