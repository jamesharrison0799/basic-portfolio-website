import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute opacity-60 inset-0 overflow-hidden flex bg-grey-500 skew-y-12 blur-3xl animate-pulse scale-125">
        <div className=" w-96 h-96 bg-blue-200  blur-sm animate-pulse opacity-30"></div>
        <div className=" w-96 h-96 bg-green-200  blur-sm animate-pulse opacity-30"></div>
        <div className=" w-96 h-96 bg-red-200  blur-sm animate-pulse opacity-30"></div>
        <div className=" w-96 h-96 bg-indigo-300  blur-sm animate-pulse opacity-30"></div>
        <div className=" w-96 h-96 bg-green-200  blur-sm animate-pulse opacity-30 "></div>
      </div>

      <div className="w-full max-w-2xl h-screen relative z-10">
        <div className="flex flex-col justify-between h-full">
          {/* nav */}
          <div className="h-32 w-full flex justify-between items-center">


            <div className="flex gap-5 items-center">
              <div className="h-10 w-10 bg-slate-600"></div>
              <div>Menu1</div>
              <div>Menu2</div>
            </div>
            <div>
              <div className="h-16 w-16 rounded-full overflow-hidden">
                <Image src={"https://github.com/jamesharrison0799.png"} alt={"sexy fella"} width={500} height={500} />
              </div>
            </div>
          </div>


          {/* main */}

          <div className="flex flex-col h-full gap-10 justify-start ">
            <div className="pt-10 flex flex-col gap-4">
              <span className="text-4xl">Hey, I'm Jimbaux</span>
              <span className="text-xl">Lovley to meet you. I'm a stoner getting baked in me bedroom. #GME</span>
            </div>

            {/* blog */}

            <div className="flex items-center justify-center">
              <span className="text-sm text-gray-400 text-center">Sorry, there are no blogs avaliable at this time.<br />ERROR 420 - STONED IMMACULATE</span>
            </div>

          </div>


          {/* footer */}
          <div className="h-20 border-t-gray-200 border-t-2">
            <div className="flex justify-between items-center h-full">
              <div className="flex gap-5">
                <div>X</div>
                <div>Y</div>
                <div>Z</div>
              </div>
              <div>right</div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
