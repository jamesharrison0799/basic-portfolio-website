import BlogPostList from "./components/BlogPostList";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import * as Resume from './components/Resume'
import Image from "next/image";
import ImageContainer from "./components/gallery/ImageContainer";
import path from "path"
import fs from 'fs'


function HeroContent() {
  return (
    <div className="pt-4 flex flex-col gap-4">
      <h1 className="text-4xl font-bold text-base-100">{`Hello, I'm ${Resume.bio.title}`}</h1>
      <p className="text-xl text-neutral text-wrap">{Resume.bio.tagline}</p>
    </div>
  )
}

function Blog() {
  return (
    <div className="flex flex-col items-center justify-start gap-12 pt-16">

      <BlogPostList title={"Post One"} desc={"It’s been a long time since I’ve published a blog post. Two whole years. Now we’ve reached 2024, it’s time for a complete refresh."} date={"28 Jan 24"} />
      <BlogPostList title={"Post Two"} desc={"It’s been a long time since I’ve published a blog post. Two whole years. Now we’ve reached 2024, it’s time for a complete refresh."} date={"28 Jan 24"} />
      <BlogPostList title={"Post Three"} desc={"It’s been a long time since I’ve published a blog post. Two whole years. Now we’ve reached 2024, it’s time for a complete refresh."} date={"28 Jan 24"} />

      <div className="w-full">
        <span className="text-base-100 hover:text-secondary">More Articles</span>
      </div>

    </div>

  )
}

function Gallery() {

  const imagesDirectory = path.join(process.cwd(), 'public', 'gallery/jpeg')

  const imageFileNames = fs.readdirSync(imagesDirectory);

  const imageFiles = imageFileNames.filter(fileName => /\.(jpg|jpeg|png|gif)$/i.test(fileName));

  return (
    <div>
      <div className="pb-10">
        <h1 className="text-2xl font-bold text-base-100">Gallery</h1>
      </div>

      <div className="flex flex-wrap gap-10">

        {imageFiles.map((fileName, index) => (
          <div className="h-full" key={index}>
            <span className=""><ImageContainer altText="" fileName={fileName} /></span>
          </div>
        ))}

        <div className="flex w-full justify-center">
          <span>View more on <a className="underline" href="https://www.flickr.com/photos/jamesharrison">Flickr</a></span>
        </div>
      </div>

    </div>
  )
}

export default function Home() {
  return (
    <>
      <HeroContent />
      <Resume.Section />
      <Gallery />
      {/* <Blog /> */}
    </>
  );
}
