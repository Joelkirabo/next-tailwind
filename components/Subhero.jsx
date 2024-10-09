
import Link from 'next/link'

export default function Subhero(){
    return(
        <div className="bg-white flex flex-col lg:flex-row gap-[100px] px-4 sm:px-20 py-4">{/*sub hero section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between gap-10">{/*left*/}
        <div className=" flex gap-20 justify-center">
          <button className="bg-black text-white rounded-full py-1 px-5">Schedule Call</button>
          <Link href="/" className="underline font-bold decoration-gray-500">View Case Study</Link>
        </div>
          <div className="flex flex-col sm:flex-row gap-10 justify-start items-center">
            <div className="font-bold">Trusted by the world's biggest brands</div>
            <div className="flex gap-10 text-gray-500 text-lg font-bold">
              <div>afterpay</div>
              <div>Basecamp</div>
              <div>maze</div>
            </div>
          </div>
          
      </div>
      <div className="w-full lg:w-1/2 bg-black text-white flex gap-5 rounded-lg">{/*right */}
        <div className="w-1/2  p-6 flex flex-col gap-5">
            <div className="flex items-center gap-2 text-gray-300">
              <div className="bg-white h-[0.5px] w-[15%]">

              </div>
              <div className="text-xs" >Drive More Traffic and Sales</div>
            </div>
            <div className="font-bold text-xl">Drive more trafic and product sales</div>
        </div>
        <div className="w-1/2 flex items-end gap-2">
          <div className="w-10 h-[50px] bg-lime-300" ></div>
          <div className="w-10 h-[70px] bg-lime-400"></div>
          <div className="w-10 h-[100px] bg-lime-500"></div>
        </div>

      </div>

    </div>
    )
}