import React from "react";

const Project = () => {
  return (
    <div className="h-screen flex ">
      <div
        className="basis-1/3 bg-center bg-cover relative z-10 "
        style={{
          background:
            "url(https://images.unsplash.com/photo-1552705906-adcf48ae889a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50  hover:opacity-0 transition-all"></div>
      </div>

      <div className="flex justify-between flex-col basis-2/3 h-full bg-[#F7F7F7]">
        <div className="px-20 pt-20">
          <h1 className="text-5xl font-bold pb-12 text-emerald-900">
            No Project Too Big Or Too Small
          </h1>

          <div className="w-20 h-2 bg-black "></div>

          <div className="flex gap-8 mt-12">
            <div className=" flex flex-col basis-1/2">
              <span className="text-2xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, amet deleniti! Veritatis nobis nostrum eum aliquid.
                Mollitia ea dicta quis eos sapiente explicabo, quaerat, quia
                alias quasi adipisci cum aspernatur enim quibusdam maiores
                eveniet doloribus a. Fugiat illo ab esse.
              </span>

              <span className="mt-10 text-2xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Similique ducimus, ratione libero nesciunt illo placeat!
              </span>
            </div>

            <div className=" flex flex-col basis-1/2">
              <span className="text-2xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, amet deleniti! Veritatis nobis nostrum eum aliquid.
                Mollitia ea dicta quis eos sapiente explicabo, quaerat, quia
                alias quasi adipisci cum aspernatur enim quibusdam maiores
                eveniet doloribus a. Fugiat illo ab esse.
              </span>

              <span className="mt-10 text-2xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Similique ducimus, ratione libero nesciunt illo placeat!
              </span>
            </div>
          </div>
        </div>



        <div className="flex">
            <div className="py-4 basis-1/2 bg-emerald-900">
                    <div className="flex flex-col">
                        <h1>12</h1>

                        <p>Years Established</p>
                    </div>
            </div>

            <div className="py-4 basis-1/2 bg-black text-white">
                    <div className="flex flex-col">
                        <h1>12</h1>

                        <p>Years Established</p>
                    </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
