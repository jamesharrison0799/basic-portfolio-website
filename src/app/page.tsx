import BlogPostList from "./components/BlogPostList";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";



function HeroContent() {
  return (
    <div className="pt-10 flex flex-col gap-4">
      <h1 className="text-4xl font-bold">Hey, Im Jimbaux</h1>
      <h2 className="text-xl text-gray-500">Lovley to meet you. Im a web dev making heavy websites.</h2>
    </div>
  )
}

function Blog() {
  return (
    <div className="flex flex-col items-center justify-start gap-10">
      {/* <span className="text-sm text-gray-400 text-center">Sorry, there are no blogs avaliable at this time.<br />ERROR 420 - STONED IMMACULATE</span> */}
      <BlogPostList title={"Post One"} desc={"It’s been a long time since I’ve published a blog post. Two whole years. Now we’ve reached 2024, it’s time for a complete refresh."} date={"28 Jan 24"} />
      <BlogPostList title={"Post One"} desc={"It’s been a long time since I’ve published a blog post. Two whole years. Now we’ve reached 2024, it’s time for a complete refresh."} date={"28 Jan 24"} />
      <BlogPostList title={"Post One"} desc={"It’s been a long time since I’ve published a blog post. Two whole years. Now we’ve reached 2024, it’s time for a complete refresh."} date={"28 Jan 24"} />

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
