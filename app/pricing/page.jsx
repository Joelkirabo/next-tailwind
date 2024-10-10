'use client'
import {FaCheck, FaCircle} from 'react-icons/fa'

import { useState } from "react"

export default function Pricing(){
    const buttons =[
        {
            id: 1,
            periodshown:'monthly'
        },
        {
            id: 2,
            periodshown:'annually'
        },
    ]

    const packs = [

        {
            id:1,
            title:'CORE',
            price: 19,
            tagname: 'Best for solo creators',
            features:[
               "100MB Cloud storage","100+ prompt templates","5 projects", "24/7 support"
            ]
        },
        {
            id:2,
            title:'OVERDRIVE',
            price: 79,
            tagname: 'Most popular plan',
            features:[
               "All Starter features","1TB addititional storage","unlimited projects", "Analytics"
            ]
        },
        {
            id:3,
            title:'TEAM',
            price: 39,
            tagname: 'Exclusively for teams',
            features:[
               "All Overdrive features","10TB additional storage","50% off per member", "Real-time collaboration"
            ]
        },
      
    ]

    const [period, setPeriod] = useState('monthly');

    const popular = "OVERDRIVE";

    console.log(period)
    return(
        <div className="bg-slate-500 w-screen h-auto">
            <div className="rounded-lg bg-slate-800 p-8" >
                <h1 className="text-white mx-auto w-[70%] font-bold text-xl sm:text-3xl text-center tracking-wider">Flexible pricings <br></br> for teams of all sizes</h1>
                <div className="text-white bg-slate-800 flex justify-between  border border-slate-600 rounded-lg w-[200px] mx-auto p-0.5 my-7 shadow-lg shadow-slate-500">
                    {
                        buttons.map((button)=>{
                            return(
                                <button key={button.id} onClick={()=>setPeriod(button.periodshown)} className={` ${period===button.periodshown?"bg-blue-950 w-1/2 font-bold  border border-blue-900 uppercase text-[10px] px-3 py-2 rounded-lg ":"bg-slate-800 uppercase font-bold text-[10px] w-1/2 rounded-lg"} `} >{button.periodshown}</button>
                            )
                        })
                    }
                    
                </div>

                <div className="flex justify-center flex-wrap gap-4 sm:gap-0">

                    {
                        packs.map((pack)=>{
                            return(
                                <div key={pack.id} className={` ${pack.title===popular?"bg-slate-700 flex justify-center flex-col text-white border border-slate-700 rounded-lg p-6  shadow-lg shadow-slate-500 relative":"relative  shadow-lg shadow-slate-500 flex justify-center flex-col text-white border border-slate-700 rounded-lg p-6"} `}>
                                    <div className="h-10 w-10 rounded-full bg-slate-800 border border-slate-600 self-center absolute top-[-20px] flex justify-center items-center"><FaCircle className={`   ${pack.title===popular?"text-lg text-yellow-500 font-bold ":"text-lg text-green-500 font-bold"}` }/></div>
                                    <div className='flex justify-center flex-col gap-5  pb-5 border-b border-slate-600'>
                                <span className={ `${pack.title===popular?'mx-auto border title font-bold border-green-300 py-0.5 px-2 rounded-full tracking-wider shadow-md shadow-yellow-300':'shadow-md shadow-green-300 mx-auto border text-green-500 font-bold border-green-300 py-0.5 px-2 rounded-full tracking-wider'}`}>{pack.title}</span>
                                <p className="mx-auto flex item-start text-xs  font-bold tracking-wider"><span className={` ${pack.title===popular?"font-bold title text-4xl":"font-bold text-4xl"}`}>${pack.price}</span>/MO</p>
                                <p className='text-center font-bold'>{pack.tagname}</p>
                                   </div>



                                <div className='py-4'>
                                    <ul>
                                        {
                                            pack.features.map((feature,i)=>{
                                                return(
                                                    <li key={i} className='flex justify-start items-center gap-3 mb-3 '>

                                                        <FaCheck className=' rounded-full p-0.5 bg-blue-500 text-slate-800 text-xs' /> {feature}
                                                    </li>
                                                )
                                            })
                                        }
                                       
                                    </ul>
                                </div>
                                <div className=' flex justify-center'> 
                                <button className='flex bg-blue-950 gap-2 items-center  font-bold  border border-blue-900 uppercase text-[10px] px-3 py-2 rounded-lg shadow-md shadow-slate-500 hover:shadow-inner hover:shadow-slate-500'>
                                <div className="h-5 w-5 rounded-full bg-slate-800 border border-slate-600 self-center  flex justify-center items-center"><FaCircle className={`   ${pack.title===popular?"text-lg text-yellow-500 font-bold ":"text-lg text-green-500 font-bold"}` }/></div>
                                GET STARTED</button>
                                </div>
                            </div>
                            )
                        })
                    }
                   
                   
                </div>

            </div>

        </div>
    )
}