import Image from 'next/image'

export default function(){
    return(
        
    <div className="bg-white flex gap-[30px] px-20 py-4">
    <div className="bg-black flex flex-col gap-[50px] justify-between p-5 w-full lg:w-1/3 rounded-lg">
      <div className="text-white flex flex-col gap-2 ">
        <h1 className="font-bold text-4xl">920<span className="text-lime-300">+</span></h1>
        <p className="text-gray-300 text-sm">Project finish with superbly</p>
      </div>

      <div className="flex gap-1 flex-wrap">
      <Image src="/image1.jpg" height={50} width={50}  className="rounded-full"/>
      <Image src="/image1.jpg" height={50} width={50}  className="rounded-full"/>
      <Image src="/image1.jpg" height={50} width={50}  className="rounded-full"/>
      <Image src="/image1.jpg" height={50} width={50}  className="rounded-full"/>
      <Image src="/image1.jpg" height={50} width={50}  className="rounded-full"/>

        <span className="text-4xl font-bold text-white">+</span>

      </div>

    </div>
    <div className="hidden lg:flex bg-gray-400 rounded-lg text-white w-2/3 flex-col relative">
        <div className="h-2/3 flex justify-center text-black items-end text-6xl tracking-wider pb-4">How we work</div>
        <div className="flex justify-end ">
          <div className="h-20 w-20 bg-lime-500 rounded-full border border-white border-8 absolute right-[-8px] flex justify-center items-center">
                <div className="h-0 w-0 border-t-[8px] border-b-[8px] border-l-[16px] border-transparent border-l-black rounded"></div>
          </div>
        </div>
    </div>

  </div>

    )
}