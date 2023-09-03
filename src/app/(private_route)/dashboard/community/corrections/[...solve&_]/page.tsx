"use client"
import Image from "next/image"
import QuesitonPhoto from '../../../../../../assets/quizsolution.png'
import UserPhoto from '../../../../../../assets/user_reset_png.png'
import React, {ReactNode, useState} from 'react'

import {BiLike,BiDislike} from 'react-icons/bi'
import {MdOutlineAddPhotoAlternate} from 'react-icons/md'
import { Textarea } from "@material-tailwind/react";


interface ParamsProps{
    params:{corrections:string}
}


const CorrectionsPage:React.FC<ParamsProps>=({params})=>{
    const [openSolutionPlace,setOpenSolutionPlace]=useState<boolean>(false);
    const date=new Date().toLocaleString();
    console.log(params.corrections);
    console.log(params.corrections);



    return (
        <section className="mx-auto w-full h-full flex flex-col justify-center items-center" style={{width:"1000px"}}>


            <div className="w-full h-full flex flex-col justify-center items-center mt-3">
                <div className="flex-1 flex justify-center items-center px-5  w-full" >
                    <Image src={QuesitonPhoto} width={200}  alt="quesiton-photos"/>
                    <Image src={QuesitonPhoto} width={200}  alt="quesiton-photos"/>
                    <Image src={QuesitonPhoto} width={200}  alt="quesiton-photos"/>
                </div>
                <div className="border-4 flex flex-col justify-center w-full p-5 rounded-xl">
                    <div className="flex flex-row justify-between">
                        <div className="flex-1 flex justify-start items-center">
                            <div>
                                <Image src={UserPhoto} className="rounded-full" width={100} alt="user-corrections-photo"/>
                            </div>
                            <div className="flex flex-col justify-start w-full ml-2">
                                <span>TestUSER</span>
                                <span>diğer içerikler</span>
                            </div>
                        </div>
                        <div className="flex justify-end items-center">
                            <button className="p-3 bg-blue-500 rounded-2xl text-white font-medium my-2 hover:bg-blue-700 transition duration-300 ease-in-out">Add Friend</button>
                        </div>
                    </div>
                    <span className="mt-2">{date}</span>
                    <span className="mt-2">Soru İçeriği açıklaması</span>
                </div>


            </div>
            
            {openSolutionPlace?(
                <div className='flex flex-col border-4 rounded-xl w-full p-5 m-5'>
                    <div className='flex flex-row w-full'>
                        <span className='flex flex-1 justify-center items-center text-4xl cursor-pointer border-4 mr-2'><MdOutlineAddPhotoAlternate/></span>
                        <div className='flex-1 flex'>
                            <Textarea size="lg" label="Solution" rows={12} cols={40}/>
                        </div>
                    </div>
                    <button className="py-3 px-16 bg-blue-500 rounded-2xl text-white font-medium my-5 hover:bg-blue-700 transition duration-300 ease-in-out" onClick={()=>setOpenSolutionPlace(false)}>Gönder</button>
                </div>
            ):(
                <button className="py-3 px-16 bg-blue-500 rounded-2xl text-white font-medium my-5 hover:bg-blue-700 transition duration-300 ease-in-out" onClick={()=>setOpenSolutionPlace(true)}>Solution</button>
            )}
                
                
            <div className="w-full flex flex-row ">
                <div className="border-4 flex flex-col justify-center w-full p-5 rounded-xl">
                    <div className="flex flex-row justify-between">
                        <div className="flex-1 flex justify-start items-center">
                            <div>
                                <Image src={UserPhoto} className="rounded-full" width={100} alt="user-corrections-photo"/>
                            </div>
                            <div className="flex flex-col justify-start w-full ml-2">
                                <span>TestUSER</span>
                                <span>diğer içerikler</span>
                            </div>
                        </div>
                        <div className="flex justify-end items-center">
                            <button className="p-3 bg-blue-500 rounded-2xl text-white font-medium my-2 hover:bg-blue-700 transition duration-300 ease-in-out">Add Friend</button>
                        </div>
                    </div>
                    <span className="mt-2">{date}</span>
                    <span className="mt-2 bg-blue-100 p-2 rounded-xl">Soru Cevabı Açıklaması</span>
                </div>
                <div className='ml-2 justify-center items-center'>
                    <button className="p-3 bg-blue-500 rounded-2xl text-white font-medium my-5 hover:bg-blue-700 transition duration-300 ease-in-out"><BiLike/></button>
                    <button className="p-3 bg-blue-500 rounded-2xl text-white font-medium my-5 hover:bg-blue-700 transition duration-300 ease-in-out"><BiDislike/></button>
                </div>
            </div>

        </section>
    )
}

export default CorrectionsPage