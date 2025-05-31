import BackgroundRemovalShowcase from "./components/BackgroundRemove";
import PhotoditFooter from "./components/Footer";
import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";
import NewsSlider from "./components/NewSlider";
import PhotoditComponent from "./components/PhotoEditComponent";
import PhotoEditorComponent from "./components/PhotoEditor";
import PricingPlan from "./components/PricingPlan";
import ClippingPathSlider from "./components/services";
import TestimonialSlider from "./components/Testimonial";
import HowItWorks from "./components/Work";

export default function App() {
  return (
  <div>
    <Navbar/>
    <HeroSection/>
    <ClippingPathSlider/>
    <PhotoditComponent/>
    <HowItWorks/>
    <PhotoEditorComponent/>
    <BackgroundRemovalShowcase/>
    <TestimonialSlider/>
    <PricingPlan/>
    <NewsSlider/>
    <PhotoditFooter/>
    
  </div>
  )
}