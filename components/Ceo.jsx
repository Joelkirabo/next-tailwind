import Image from 'next/image'

export default function Ceo(){
    return(
        <div className="px-20 py-4">
        <p className="font-bold text-lg tracking-wide pb-4">"They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. their creative ideas and cutting edge techniques have helped us stayh ahad of the competition"</p>
        <div className="flex flex-col gap-5 sm:flex-row justify-between items-between">
          <div className="flex justify-center items-center gap-5">
          <Image src="/image1.jpg" height={50} width={50}  className="rounded-full"/>
            <div>
              <h1 className="font-bold">Michale Kalzer</h1>
              <p className="text-gray-500">CEO of Basecamp Corp</p>
            </div>
          </div>

          <div className="flex gap-5 justify-center items-center">
            <button className="border border-black py-1 px-2 rounded-full">btn1</button>
            <span className="font-bold"><span className="text-gray-500 underline">01</span>/05</span>
            <button className="border border-black py-1 px-2 rounded-full bg-black text-white">btn2</button>
          </div>
        </div>
      </div>
    )
}