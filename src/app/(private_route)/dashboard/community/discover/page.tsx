"use client"
import Image from "next/image"
import UserPhoto from '../../../../../assets/user_reset_png.png'
import QuestionPhoto from '../../../../../assets/math-problem-photo.jpg'
import { useEffect, useState } from "react"
import { redirect } from "next/navigation"
import Link from "next/link"
import { FaRegCommentDots } from "react-icons/fa"


const DiscoverPage:React.FC=()=>{


    const maxLength:number=90;
    const originalText:string='Ben çok güzel bir insanım Arkadaşlarımla şakayapmayı ve oynamayı seviyorum. Türkiyeyi çok seviyorum. Türkçe öğrenmeyi seviyorum. Türkiyeye seyahat etmek istiyorum. Benim için dua edin'
    const [displayText,setDisplayText]=useState<string>(originalText);
    useEffect(()=>{
        if(displayText.length>maxLength){
            setDisplayText(originalText.substring(0,maxLength)+'...');
        }else{
            setDisplayText(originalText)
        }
    },[])



    return(
        <main className="grid grid-cols-4 gap-4 w-full h-full justify-center flex">

            <div className="w-full h-full flex flex-col justify-center items-center bg-gray-200 mx-auto rounded-2xl">
                <div className="items-center flex mt-2">
                    <div className="flex justify-center items-center">
                        <Image src={UserPhoto} width={75} className="rounded-full" alt="user-photo-fetch"/>
                    </div>
                    <div className="justify-start items-center ml-3 flex flex-col font-bold text-xl">
                        <span>TEST_USER</span>
                        <span>CLASS:<span className="font-medium ml-2">7th Class</span></span>
                        <span>SUBJECT:<span className="font-medium ml-2">Konu</span></span>
                    </div>
                </div>
                <div className="flex flex-row mt-5">
                    <div className="flex-1 flex justify-center items-center ">
                        <Image src={QuestionPhoto} width={150} alt="question-photo-fetch"/>
                    </div>
                    <div className="flex-1 flex justify-start items-center">
                        <span>{displayText}</span>
                    </div>
                </div>
                <Link href='/dashboard/community/corrections/12312' className="p-3 bg-blue-500 rounded-2xl text-white font-medium my-2 hover:bg-blue-700 transition duration-300 ease-in-out" >Solution Problem</Link>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center bg-gray-200 mx-auto rounded-2xl">
                <div className="items-center flex mt-2">
                    <div className="flex justify-center items-center">
                        <Image src={UserPhoto} width={75} className="rounded-full" alt="user-photo-fetch"/>
                    </div>
                    <div className="justify-start items-center ml-3 flex flex-col font-bold text-xl">
                        <span>TEST_USER</span>
                        <span>CLASS:<span className="font-medium ml-2">7th Class</span></span>
                        <span>SUBJECT:<span className="font-medium ml-2">Konu</span></span>
                    </div>
                </div>
                <div className="flex flex-row mt-5">
                    <div className="flex-1 flex justify-center items-center ">
                        <Image src={QuestionPhoto} width={150} alt="question-photo-fetch"/>
                    </div>
                    <div className="flex-1 flex justify-start items-center">
                        <span>{displayText}</span>
                    </div>
                </div>
                <Link href='/dashboard/community/corrections/12312' className="p-3 bg-blue-500 rounded-2xl text-white font-medium my-2 hover:bg-blue-700 transition duration-300 ease-in-out" >Solution Problem</Link>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center bg-gray-200 mx-auto rounded-2xl">
                <div className="items-center flex mt-2">
                    <div className="flex justify-center items-center">
                        <Image src={UserPhoto} width={75} className="rounded-full" alt="user-photo-fetch"/>
                    </div>
                    <div className="justify-start items-center ml-3 flex flex-col font-bold text-xl">
                        <span>TEST_USER</span>
                        <span>CLASS:<span className="font-medium ml-2">7th Class</span></span>
                        <span>SUBJECT:<span className="font-medium ml-2">Konu</span></span>
                    </div>
                </div>
                <div className="flex flex-row mt-5">
                    <div className="flex-1 flex justify-center items-center ">
                        <Image src={QuestionPhoto} width={150} alt="question-photo-fetch"/>
                    </div>
                    <div className="flex-1 flex justify-start items-center">
                        <span>{displayText}</span>
                    </div>
                </div>
                <Link href='/dashboard/community/corrections/12312' className="p-3 bg-blue-500 rounded-2xl text-white font-medium my-2 hover:bg-blue-700 transition duration-300 ease-in-out" >Solution Problem</Link>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center bg-gray-200 mx-auto rounded-2xl">
                <div className="items-center flex mt-2">
                    <div className="flex justify-center items-center">
                        <Image src={UserPhoto} width={75} className="rounded-full" alt="user-photo-fetch"/>
                    </div>
                    <div className="justify-start items-center ml-3 flex flex-col font-bold text-xl">
                        <span>TEST_USER</span>
                        <span>CLASS:<span className="font-medium ml-2">7th Class</span></span>
                        <span>SUBJECT:<span className="font-medium ml-2">Konu</span></span>
                    </div>
                </div>
                <div className="flex flex-row mt-5">
                    <div className="flex-1 flex justify-center items-center ">
                        <Image src={QuestionPhoto} width={150} alt="question-photo-fetch"/>
                    </div>
                    <div className="flex-1 flex justify-start items-center">
                        <span>{displayText}</span>
                    </div>
                </div>
                <Link href='/dashboard/community/corrections/12312' className="p-3 bg-blue-500 rounded-2xl text-white font-medium my-2 hover:bg-blue-700 transition duration-300 ease-in-out" >Solution Problem</Link>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center bg-gray-200 mx-auto rounded-2xl">
                <div className="items-center flex mt-2">
                    <div className="flex justify-center items-center">
                        <Image src={UserPhoto} width={75} className="rounded-full" alt="user-photo-fetch"/>
                    </div>
                    <div className="justify-start items-center ml-3 flex flex-col font-bold text-xl">
                        <span>TEST_USER</span>
                        <span>CLASS:<span className="font-medium ml-2">7th Class</span></span>
                        <span>SUBJECT:<span className="font-medium ml-2">Konu</span></span>
                    </div>
                </div>
                <div className="flex flex-row mt-5">
                    <div className="flex-1 flex justify-center items-center ">
                        <Image src={QuestionPhoto} width={150} alt="question-photo-fetch"/>
                    </div>
                    <div className="flex-1 flex justify-start items-center">
                        <span>{displayText}</span>
                    </div>
                </div>
                <Link href='/dashboard/community/corrections/12312' className="p-3 bg-blue-500 rounded-2xl text-white font-medium my-2 hover:bg-blue-700 transition duration-300 ease-in-out" >Solution Problem</Link>
            </div>



        </main>
    )
}

export default DiscoverPage