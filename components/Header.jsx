'use client'

import Link from "next/link";
import { usePathname } from "next/navigation"

const linkarr = [
    {id:1, href:"/services", title:"Services"},
    {id:2, href:"/agency", title:"Agency"},
    {id:3, href:"/pricing", title:"Pricing"},
    {id:4, href:"/resources", title:"Resources"},
    {id:5, href:"/blog", title:"Blog"}
]

export default function Header(){
    const path = usePathname();

        const activeLink =(linkpath)=>{
           return linkpath === path;          
            
        }
    return(
        <div className="flex justify-between items-center p-[30px]">
            <div className="flex gap-10 justify-center items-center">
            <div className="flex justify-center items-center gap-1">
            <div className="flex justify-center items-center h-[50px] w-[50px] bg-gradient-to-r rounded-br-full from-lime-300 to-lime-300">
            <div className="h-[20px] w-[20px] bg-black rounded-br-full"></div>
                </div>    
            <Link href="/" className="font-bold text-[15px] sm:text-[30px] text-black">boostim</Link>
            </div>
            <div className="hidden md:flex gap-10 p-2 font-bold text-gray-900">                
        {
            linkarr.map((link)=>{
                return(
                    <Link key={link.id} href={link.href} className={activeLink(link.href)?"active":""}>{link.title}</Link>
                )
            })
        }
            </div>
            </div>
            <div className="flex gap-[5px] justify-center items-center">
                <button className="border border-black text-xs sm:text-sm py-0.5 px-1.5 rounded-full">Get started</button>
                <button className="text-white bg-black w-7 h-7 rounded-full">B</button>
            </div>
        </div>
    )
}