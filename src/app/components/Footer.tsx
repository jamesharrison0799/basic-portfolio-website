import Image from "next/image"

export default function Footer() {

    return (
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
    )
}