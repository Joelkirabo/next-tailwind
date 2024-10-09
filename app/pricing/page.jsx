'use client'

import { useState } from "react"

export default function Casestudy(){
    const buttons =[
        {
            id: 1,
            periodshown:'monthly'
        },
        {
            id: 2,
            periodshown:'yearly'
        },
    ]

    const packs = [
        {
            id:1,
            title:'basic package',
            price: 100,
            features:[
                "1tb cloud storage","24/7 team support"
            ]
        },
        {
            id:2,
            title:'medium',
            price: 200,
            features:[
                "10tb cloud storage","24/7 customer service"
            ]
        },
        {
            id:3,
            title:'pro package',
            price: 500,
            features:[
                "all features"
            ]
        },
    ]

    const [period, setPeriod] = useState('monthly');

    console.log(period)
    return(
        <div className="bg-slate-500 w-screen h-auto py-16 px-20">
            <div className="rounded-lg bg-slate-600 p-8" >
                <h1 className="text-white mx-auto w-[70%] flex justify-center">pricings</h1>
                <div className="text-white flex justify-between gap-5 border border-white rounded-lg w-[200px] mx-auto my-5">
                    {
                        buttons.map((button)=>{
                            return(
                                <button key={button.id} onClick={()=>setPeriod(button.periodshown)} className={` ${period===button.periodshown?"bg-slate-700 w-1/2 rounded-lg":"bg-slate-600 w-1/2 rounded-lg"} `} >{button.periodshown}</button>
                            )
                        })
                    }
                    
                </div>

                <div className="flex justify-center flex-wrap gap-5">

                    {
                        packs.map((pack)=>{
                            return(
                                <div key={pack.id} className={` ${pack.title==='medium'?"bg-slate-900 flex justify-center flex-col text-white border border-white rounded-lg p-6":"flex justify-center flex-col text-white border border-white rounded-lg p-6"} `}>
                                <h1 className="mx-auto">{pack.title}</h1>
                                <p className="mx-auto flex item-start"><span className="font-bold text-4xl">${pack.price}</span>/month</p>
                                <div>
                                    <ul>
                                        {
                                            pack.features.map((feature,i)=>{
                                                return(
                                                    <li key={i}>
                                                        {feature}
                                                    </li>
                                                )
                                            })
                                        }
                                       
                                    </ul>
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