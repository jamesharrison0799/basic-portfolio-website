'use client'
import path from "path"
import fs from 'fs'
import { ImageData } from "@/app/content/gallery/image_data";
import { useState } from "react";
import Image from "next/image";


type ImageContainerProps = {
    fileName: string;
    altText: string;
}

export default function ImageContainer({ fileName, altText }: ImageContainerProps) {

    function GetData() {
        const imageData = ImageData.find((data: { fileName: string; }) => data.fileName === fileName);
        return imageData ? imageData : null;
    }

    const imageData = GetData();

    const [fullScreenActive, setFullScreenActive] = useState(false)

    const toggleFullScreen = () => {
        setFullScreenActive(!fullScreenActive);
    };

    if (!fullScreenActive) {
        return (
            <div className="hover:cursor-pointer">
                <Image
                    src={`/gallery/${fileName}`}
                    alt={altText}
                    onClick={toggleFullScreen} // Click to toggle full screen
                    width={1000}
                    height={500}
                />
                {/* <div className="font-bold text-lg">
                    {imageData && imageData.title && <h1 className="text-base-100">{imageData.title}</h1>}
                </div> */}
            </div>
        )
    } else {
        return (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-100 flex justify-center items-center">
                <button className="absolute top-0 right-0 m-4 text-neutral" onClick={toggleFullScreen}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" className="fill-neutral hover:fill-base" viewBox="0 0 30 30">
                        <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
                    </svg>
                </button>
                <div className="h-screen w-screen flex flex-col items-center justify-center gap-10">
                    <div className="h-5/6 max-w-screen-2xl">
                        <img
                            src={`/gallery/${fileName}`}
                            alt={altText}
                            className="max-w-full max-h-full"
                        />
                    </div>
                    <div className="">
                        <span>{imageData?.title}</span>
                    </div>
                </div>
            </div >
        );
    }

}