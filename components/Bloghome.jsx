'use client'

import Blog from "./Blog"
import useFetch from "./useFetch"

export default function Bloghome(){
    const {data:blogs, isLoading, error}= useFetch('data/db.json') 
   
    return (
        <div className="p-4">

            {error&&<div>{error}</div>}
            {isLoading&&<div className='flex justify-center'>Data Loading....</div>}
            {blogs&&<Blog blogs={blogs} title="All blogs" />}   
  
        </div>
    )
}


