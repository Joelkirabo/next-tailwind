import Link from "next/link"

export default function Footer(){
    return(
        
        <div className="flex flex-col md:flex-row gap-20 py-8 px-20">

          <div className="w-full md:w-1/3 flex flex-col gap-5">
          <div className="flex items-center gap-1">
            <div className="flex justify-center items-center h-[50px] w-[50px] bg-gradient-to-r rounded-br-full from-lime-300 to-lime-300">
            <div className="h-[20px] w-[20px] bg-black rounded-br-full"></div>
                </div>    
            <Link href="/" className="font-bold text-[30px] text-black">boostim</Link>
            </div>
            <p className="text-gray-500">They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. their creative ideas and</p>

          </div>

          <div className="w-full md:w-2/3">
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="text-left font-bold pb-6 pr-20">Navigation</th>
                  <th className="text-left font-bold pb-6 pr-20">License</th>
                  <th className="text-left font-bold pb-6">Contact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-gray-500 pb-2">service</td>
                  <td className="text-gray-500 pb-2">privacy policy</td>
                  <td className="text-gray-500 pb-2">0789555747474</td>              
                </tr>
                <tr>
                <td className="text-gray-500 pb-2">agency</td>
                <td className="text-gray-500 pb-2">copyright</td>
                <td className="text-gray-500 pb-2">hey@gmail.com</td>
                </tr>
                <tr>
                    <td className="text-gray-500 pb-2">case study</td>
                    <td className="text-gray-500 pb-2">email adress</td>
                    <td className="text-gray-500 pb-2">23664 manchester street</td>
                </tr>

                <tr>
                  <td className="text-gray-500 pb-2">resourse</td>
                </tr>
                <tr>
                  <td className="text-gray-500 pb-2">contact</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    )
}