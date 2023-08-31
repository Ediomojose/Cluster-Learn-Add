import HeaderNav from "./components/HeaderNav/HeaderNav"
import HeroSection from "./pages/HeroSection"
import MentorGrid from "./pages/MentorGrid"
import ServiceGrid from "./pages/ServiceGrid"
import TestimonialCarousel from "./pages/TestimonialCarousel"

function App() {

  return (
    <>
      <HeaderNav/>
      <HeroSection/>
      <ServiceGrid/>
      <TestimonialCarousel/>
      <MentorGrid/>
    </>
  )
}

export default App
