import { Navbar } from "../components/Navbar/Navbar";
import { Hero } from "../components/Hero/Hero";
import { Benefits } from "../components/Benefits/Benefits";
import { CeilingGallery } from "../components/CeilingGallery/CeilingGallery";
import { Services } from "../components/Services/Services";
import { ProjectGallery } from "../components/ProjectGallery/ProjectGallery";
import { BeforeAfter } from "../components/BeforeAfter/BeforeAfter";
import { Process } from "../components/Process/Process";
import { WhyChooseUs } from "../components/WhyChooseUs/WhyChooseUs";
import { ContactCTA } from "../components/ContactCTA/ContactCTA";
import { Footer } from "../components/Footer/Footer";
import { MobileCTA } from "../components/MobileCTA/MobileCTA";

export function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <CeilingGallery />
        <Services />
        <ProjectGallery />
        <BeforeAfter />
        <Process />
        <WhyChooseUs />
        <ContactCTA />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
