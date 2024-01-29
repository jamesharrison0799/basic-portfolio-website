import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Jimbaux",
  description: "Generated by create next app",
};

function HeaderAnimation() {
  return (
    // <div className="absolute pointer-events-none scale-x-150 -top-32  flex  justify-center opacity-40 w-full ">
      <div><div className="absolute scale-150 gap-15 pointer-events-none -mb-10 -mt-28 -ml-40 flex -rotate-45 justify-center amazing-rays"><div className="h-48 w-8 scale-150 bg-pink-500"></div><div className="h-56 w-8 scale-150 bg-red-500"></div><div className="h-64 w-8 scale-150 bg-yellow-500"></div><div className="h-72 w-8 scale-150 bg-green-500"></div><div className="h-100 w-20 scale-150 bg-blue-500"></div></div></div>
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
