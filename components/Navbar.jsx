

export default function Navbar(){
    return(
        <div className="border-b border-gray-200 flex justify-between p-4 item-center">
            <div className="text-pink-500 font-bold">BlogSite</div>
            <div className="flex gap-2">
                <button>Home</button>
                <button className="bg-pink-500 py-0.5 px-2 rounded-lg text-white">New Blog</button>
            </div>
        </div>
    )
}