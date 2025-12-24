import Header from "@/public/components/Header";
import Headerr from "@/public/components/Headerr";
import Navbar from "@/public/components/Navbar";
import OurServices from "@/public/components/OurServices";
import StatSection from "@/public/components/StatSection";
import FeaturedProjects from "@/public/components/FeaturedProjects";
import OurEquipment from "@/public/components/OurEquipment";
import ContactUs from "@/public/components/ContactUs";
import Footer from "@/public/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Headerr/>
      <div className="py-6 px-4 md:px-20 flex items-center justify-between">
        <h1 className="md:text-2xl xl:text-4xl font-bold text-emerald-900">Get a Quote For Your Project</h1>

        <button className="border-2 md:border-5 px-2 py-2 text-lg md:text-2xl text-emerald-900 border-emerald-900 hover:border-emerald-700 hover:cursor-pointer hover:-translate-y-1 hover:transition-all">
        FREE QUOTE
        </button>
      </div>

      <StatSection/>

      {/* <Project/> */}

      <OurServices/>
      <FeaturedProjects/>
      <OurEquipment/>
      <ContactUs/>
      <Footer/>
    </>
  );
}
