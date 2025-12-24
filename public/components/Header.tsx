import React from "react";
import hero from "../heroBg.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className="h-160 bg-cover bg-top bg-no-repeat flex">
      <div
        className="  flex flex-col basis-[65%] xl:basis-3/4 items-start justify-center h-full lg:px-20 text-white"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 w-[65%] xl:w-3/4 h-160"></div>
        <div className="relative z-10">
          <span className="flex items-center gap-4">
            <span className="border-l-8 h-32  border-emerald-900 "></span>
            <h1 className="text-8xl font-bold ">Construction</h1>
          </span>

          <p className="text-2xl pl-8 mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            sunt, distinctio temporibus, quas facere dicta qui labore sed magni
            illum quam illo, voluptas ipsa hic. Veniam, explicabo illum amet qui
            temporibus quas odio accusamus deserunt, fugiat, perferendis nisi
            ratione suscipit?
          </p>


          <button className="px-8 py-5 bg-emerald-900 ml-8 font-bold text-lg hover:translate-x-1 hover:bg-white hover:text-emerald-900 transition-all hover:animate-pulse hover:cursor-pointer">View our work</button>
        </div>
      </div>

      <div className="bg-emerald-900 h-full basis-[35%] xl:basis-1/4 py-20 text-white px-10">
        <h1 className="text-white text-4xl mb-10 font-bold /text-center">
          Our Services
        </h1>

        <div className="/px-10 flex flex-col gap-8">
          <div className="flex gap-4 ">
            <Image
              src={"/service1.svg"}
              width={60}
              height={60}
              alt="wossade service image"
              className="w-15 h-15"
            />

            <div className="flex flex-col items-start">
              <h1 className="text-black text-2xl  font-bold text-center">
                Building Construction
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                doloribus.
              </p>
            </div>
          </div>

          <div className="flex gap-4 ">
            <Image
              src={"/service2.svg"}
              width={50}
              height={50}
              alt="wossade service image"
              className="w-15 h-15"
            />
            <div className="flex flex-col items-start">
              <h1 className="text-black text-2xl  font-bold text-center">
              Foundation Work
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                doloribus.
              </p>
            </div>
          </div>

          <div className="flex gap-4 ">
            <Image
              src={"/service3.svg"}
              width={50}
              height={50}
              alt="wossade service image"
              className="w-15 h-15"
            />
            <div className="flex flex-col items-start">
              <h1 className="text-black text-2xl  font-bold text-center">
              Site Management
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                doloribus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
