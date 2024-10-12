'use client'

import { useState, useEffect } from "react";

export default function useFetch(url){

    const [data, setData]= useState(null);
    const [isLoading, setIsLoading] =useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch(url)
         .then((res)=>{
            if(!res.ok){
                throw Error("something went wrong");                
            };
            return res.json();                   
         })
         .then((data)=>{
             setIsLoading(false)
             setError(null)
             setData(data)
         })
         .catch((err)=>{
            setError(err.message)
            setIsLoading(false)
         })

    },[]);

    return {data, isLoading, error};

}

