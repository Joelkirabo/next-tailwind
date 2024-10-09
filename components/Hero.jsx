
import Image from "next/image";

export default function Hero(){
    return(
        <div className="flex flex-col lg:flex-row gap-[100px] px-20 py-4">{/*hero section */}
        <div className="w-full lg:w-1/2 bg-white">{/*left div */}
          <h1 className="font-bold text-6xl tracking-wider pb-6">Stay ahead of the curve with our forward-thinking</h1>
          <p className="text-gray-500 leading-relaxed">An award winning SEO agency with disciplines in digital marketing, design, and website development, focused on understanding you.</p>
        </div>

        <div className="flex gap-4 bg-white w-full lg:w-1/2 flex-col sm:flex-row">{/*right */}


          <div className="w-full sm:w-1/2 bg-white relative overflow-hidden rounded-tl-full rounded-tr-lg">
           
            <Image src="/image1.jpg" layout="fill" className="rounded object-cover" />
            <div className="flex justify-center items-center h-20 w-20 bg-black absolute right-[30%] top-[20px] rounded-full">
              <div className="h-7 w-7 bg-lime-300 rounded-md" ></div>
            </div>

          </div>
          
          <div className="bg-gray-100 w-full sm:w-1/2 p-8 flex flex-col gap-5 rounded-md">
              <h1 className="font-bold text-6xl">230+</h1>
              <p className="text-gray-500">some big companies that we work with, and trust us very much</p>
              <div className="h-1 w-[90%] bg-gray-200">
                <div className="h-1 w-[60%] bg-black"></div>
              </div>
          </div>
          
        </div>

    </div>
    )
}