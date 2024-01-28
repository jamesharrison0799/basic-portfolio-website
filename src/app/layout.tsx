import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Jimbaux",
  description: "Generated by create next app",
};

function HeaderAnimation() {
  return (
    <div className="absolute pointer-events-none scale-x-150 -top-32  flex  justify-center opacity-40 w-full ">
      
      <div className="flex -space-y-5 amazing-rays ">
        <div className=" h-96 w-32 bg-pink-500 scale-y-150 blur-lg -rotate-45"></div>
        <div className=" h-96 w-48 bg-red-500  scale-y-150 blur-2xl -rotate-45"></div>
        <div className=" h-96 w-16 bg-yellow-500 scale-y-150 blur-md -rotate-45"></div>
        <div className=" h-96 w-12 bg-green-500 scale-y-150 blur-xl -rotate-45"></div>
        <div className=" h-96 w-32 bg-blue-500 scale-y-150 blur-2xl -rotate-45"></div>
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
        <main className="flex flex-col w-screen overflow-x-hidden justify-center items-center relative">
          <div className="noise w-screen h-full absolute"></div>
          <HeaderAnimation />
          {children}

        </main>
      </body>
    </html>
  );
}
