"use client"
import {Transition} from '@headlessui/react'
import { useEffect, useState } from 'react';




const Dashboard:React.FC=()=>{
    const [showPageTransition,setShowPageTransition]=useState<boolean>(false);
    useEffect(()=>{
        setShowPageTransition(true)
    },[])
    return(
        <>
            <Transition show={showPageTransition} enter='transition-opacity duration-500' enterFrom='opacity-0' enterTo='opacity-100'>
                <main className='mx-auto w-full h-full justify-center items-center text-center flex flex col p-24 text-4xl'>
                    Dashboard
                </main>
            </Transition>
        </>
    )
}

export default Dashboard