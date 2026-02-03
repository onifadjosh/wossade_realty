import Headerr from "@/public/components/Headerr";
import Navbar from "@/public/components/Navbar";
import OurServices from "@/public/components/OurServices";
import StatSection from "@/public/components/StatSection";
import FeaturedProjects from "@/public/components/FeaturedProjects";
import NewsSection from "@/public/components/NewsSection";
import OurEquipment from "@/public/components/OurEquipment";
import ContactUs from "@/public/components/ContactUs";
import Footer from "@/public/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Headerr />
      <StatSection />
      <OurServices />
      <FeaturedProjects />
      <NewsSection />
      <OurEquipment />
      <ContactUs />
      <Footer />
    </>
  );
}
