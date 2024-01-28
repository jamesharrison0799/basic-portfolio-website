import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


function HeroContent() {
  return (
    <div className="pt-10 flex flex-col gap-4">
      <span className="text-4xl">Hey, Im Jimbaux</span>
      <span className="text-xl">Lovley to meet you. Im a stoner getting baked in me bedroom. #GME</span>
    </div>
  )
}

function Blog() {
  return (
    <div className="flex items-center justify-center">
      <span className="text-sm text-gray-400 text-center">Sorry, there are no blogs avaliable at this time.<br />ERROR 420 - STONED IMMACULATE</span>
    </div>

  )
}


export default function Home() {
  return (

    <div className="w-full max-w-2xl h-screen relative">
      <div className="flex flex-col justify-between h-full ">
        <Navbar />
        <div className="flex flex-col h-full gap-10 justify-start ">
          <HeroContent />
          <Blog />
        </div>
        <Footer />
      </div>

    </div>
  );
}
