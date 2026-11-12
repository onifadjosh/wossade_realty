import Headerr from "@/public/components/Headerr";
import Navbar from "@/public/components/Navbar";
import OurServices from "@/public/components/OurServices";
import FeaturedProjects from "@/public/components/FeaturedProjects";
import VideoShowcase from "@/public/components/VideoShowcase";
import NewsSection from "@/public/components/NewsSection";
import OurEquipment from "@/public/components/OurEquipment";
import ContactUs from "@/public/components/ContactUs";
import Footer from "@/public/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#f4f0e8]">
      <Navbar />
      <Headerr />
      <OurServices />
      <FeaturedProjects />
      <VideoShowcase />
      <NewsSection />
      <OurEquipment />
      <ContactUs />
      <Footer />
    </main>
  );
}
