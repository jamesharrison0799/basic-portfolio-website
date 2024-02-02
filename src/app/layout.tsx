import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { resume } from "./content/resume";


export const metadata: Metadata = {
  title: `CV - ${resume.title}`,
  description: `${resume.tagline}`,
};

function HeaderAnimation() {
  return (
    <div className="absolute pointer-events-none md:scale-x-150 -top-32  flex  justify-center opacity-80 w-full ">

      <div className="flex gap-10 amazing-rays ">
        <div className=" h-96 w-32 rounded-xl bg-gradient-to-b from-pink-500 to-pink-500/20  scale-y-150 blur-lg -rotate-45"></div>
        <div className=" h-96 w-32 rounded-xl bg-gradient-to-b from-red-500   to-red-500/20    scale-y-150 blur-2xl  -rotate-45"></div>
        <div className=" h-96 w-32 rounded-xl bg-gradient-to-b from-yellow-500 to-yellow-500/20  scale-y-150 blur-md -rotate-45"></div>
        <div className=" h-96 w-32 rounded-xl bg-gradient-to-b from-green-500 to-green-500/20   scale-y-150 blur-xl  -rotate-45"></div>
        <div className=" h-96 w-32 rounded-xl bg-gradient-to-b from-blue-500  to-blue-500/20 scale-y-150 blur-2xl -rotate-45"></div>

      </div>
    </div>
  )
}




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className="">
        <div className="noise w-screen h-full absolute"></div>

        <main className="flex flex-col w-screen overflow-x-hidden justify-center items-center relative min-h-screen">
          <HeaderAnimation />
          <div className="w-full max-w-2xl h-screen relative px-10 md:px-0">
            <div className="flex flex-col justify-between ">
              <Navbar />
              <div className="flex flex-col gap-10 justify-start mb-20">
                {children}
              </div>
            </div>
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
