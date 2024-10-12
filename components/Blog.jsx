

export default function Blog({blogs,title}){
    return(
        <div>
            <h1 className='font-bold text-xl p-3'>{title}</h1>
        {
            blogs.map((blog,i)=>{
                return(
                    <div key={i} className="font-sans flex items-center justify-between border-b border-gray-200 p-3 shadow-sm ">
                        <div>
                        <h1 className='text-pink-500 font-bold'>{blog.title}</h1>
                        <p>{blog.author}</p>
                        </div>

                     </div>
                )
            })
        }
        </div>
    )
}