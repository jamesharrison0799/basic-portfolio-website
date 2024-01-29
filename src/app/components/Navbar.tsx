import Image from "next/image"
import Link from "next/link"

export default function Navbar() {

    return (
        <div className="h-32 w-full flex justify-between items-center">
            <div className="flex gap-10 items-center drop-shadow-xl shadow-white ">
            <span className="font-bold grotesk text-white text-lg">JH</span>
                <div className="flex gap-5 items-center">
                <div className="text-sm font-semibold">Blog</div>
                <div className="text-sm font-semibold">Work</div>
                <div className="text-sm font-semibold">About</div>
                </div>
             

            </div>
            <div>
                <div className="h-12 w-12 hover:scale-150 hover:-translate-x-5 hover:translate-y-5 transition ease-in-out- rounded-full overflow-hidden">
                    <Link href={"https://github.com/jamesharrison0799"}>
                        <Image src={"https://github.com/jamesharrison0799.png"} alt={"sexy fella"} width={500} height={500} />
                    </Link>
                </div>
            </div>
        </div>
    )
}