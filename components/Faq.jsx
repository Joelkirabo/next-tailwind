import Link from 'next/link'

export default function Faq(){
    return(
        <div className="flex flex-col md:flex-row gap-5 px-4 sm:px-20 py-8 bg-white rounded-lg m-4">{/*FAQ*/}
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <h1 className="text-2xl font-bold">Digital Marketing FAQs</h1>
          <p className="text-gray-500">They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. their creative ideas and cutting edge techniques have helped us stayh ahad of the competition</p>
          <div className="flex gap-5 items-center">
            <button className="font-bold border rounded-full border-black py-1 px-2">More questions</button>
            <Link href="#" className="font-bold underline decoration-gray-500">Contact Us</Link>
          </div>
        </div>

        <div className="w-full md:w-1/2 ">
          <div className="border border-t-black border-b-0 border-l-0 border-r-0 mb-2">
            <div className="flex justify-between font-bold mb-4">Why is digital marketing important for my busines? <span><button>+</button> <button>-</button></span> </div>
            <p className="answer text-gray-500">They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns </p>
          </div>
          <div className="border border-t-black border-b-0 border-l-0 border-r-0 mb-2">
            <div className="flex justify-between font-bold mb-4">Why is digital marketing important for my busines? <span><button>+</button> <button>-</button></span> </div>
            <p className="answer text-gray-500">They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns </p>
          </div>
          <div className="border border-t-black border-b-black border-l-0 border-r-0 mb-2">
            <div className="flex justify-between font-bold mb-4">Why is digital marketing important for my busines? <span><button>+</button> <button>-</button></span> </div>
            <p className="answer text-gray-500">They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns </p>
          </div>            
         
        </div>
  </div>
    )
}