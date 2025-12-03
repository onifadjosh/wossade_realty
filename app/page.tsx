import Header from "@/public/components/Header";
import Navbar from "@/public/components/Navbar";
import Project from "@/public/components/Project";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Header/>
      <div className="py-10 px-20 flex justify-between">
        <h1 className="text-6xl font-bold text-emerald-900">Get a Quote For Your Project</h1>

        <button className="border-5 px-6 py-2 text-2xl text-emerald-900 border-emerald-900 hover:border-emerald-700 hover:cursor-pointer hover:-translate-y-1 hover:transition-all">
        FREE QUOTE
        </button>
      </div>

      <Project/>
    </>
  );
}
