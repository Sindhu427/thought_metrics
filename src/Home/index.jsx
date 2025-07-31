import Blog from "./blog";
import Carousel from "./carousel";
import HeroSection from "./heroSection";
import Industry from "./industry";
import Research from "./research";

function Home() {
  return (
    <>
      <Carousel />
      <HeroSection />
      <Research />
      <Industry />
      <Blog />
    </>
  );
}

export default Home;
