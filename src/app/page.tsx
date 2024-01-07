// components
import { Navbar, Footer, FooterWithSitemap } from "@/components";

// sections
import Hero from "./hero";
import SponsoredBy from "./sponsored-by";
import AboutEvent from "./about-event";
import OurStats from "./our-stats";
import EventContent from "./event-content";
import Faq from "./faq";
import Gallery from "./gallery";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutEvent />
      <OurStats />
      <Gallery />
      {/* <Faq />| */}
      <SponsoredBy />
      <FooterWithSitemap />
    </>
  );
}
