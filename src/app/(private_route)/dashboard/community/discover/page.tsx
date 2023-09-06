"use client"
import Image from "next/image"
import UserPhoto from '../../../../../assets/user_reset_png.png'
import QuestionPhoto from '../../../../../assets/math-problem-photo.jpg'
import { useEffect, useState } from "react"
import { redirect } from "next/navigation"
import Link from "next/link"
import axios from "axios"
import { LoadingComponent } from "@/component/component.export"
import { Spinner } from "@material-tailwind/react"

export interface SharePostDataInterface{
    _id:string;
    userPhoto:String;
    userName:String;
    grade:String;
    subject:String;
    creationDate:Date;
    photos:String[];
    problemDescription:String;
    solutions:String[];
    problemDomain:String;
}



const DiscoverPage:React.FC=()=>{
    const [discoverPostData,setDiscoverPostData]=useState<SharePostDataInterface[]|undefined>(undefined);
    const [discoverDataLoading,setDiscoverDataLoading]=useState<boolean>(false);

    
   useEffect(()=>{
        //discover data fetch
        const discoverFetchData=async()=>{
            setDiscoverDataLoading(true);
            try {
                const{data:response}=await axios.get('/api/datacom/posts');
                setDiscoverPostData(response.CommunityPosts);
                setDiscoverDataLoading(false);
            } catch (error) {
                console.log('Veri Getirilirken Hata Oluştu : ',error);
            }
        }
        discoverFetchData();
    },[])


    console.log(discoverPostData?.length);
    console.log(discoverDataLoading);
    return(
        discoverDataLoading?(
                <span className="justify-center items-center text-center w-full h-screen flex">
                    <Spinner className="h-48 w-48"/>
                </span>
            ):(
            <main className="grid grid-cols-3 gap-6 w-full h-full justify-center flex mt-5">
                {discoverPostData?.map((data)=>(
                    <div className="w-full h-full flex flex-col justify-center items-center bg-gray-300 mx-auto rounded-2xl shadow-lg" key={data._id}>
                        <div className="items-center flex mt-2">
                            <div className="flex justify-center items-center">
                                <Image src={UserPhoto} width={75} className="rounded-full" alt="user-photo-fetch"/>
                            </div>
                            <div className="justify-start flex ml-3 flex-col font-bold text-xl">
                                <span>{data.userName}</span>
                                <span>CLASS:<span className="font-medium ml-2">{data.grade}</span></span>
                                <span>SUBJECT:<span className="font-medium ml-2">{data.subject}</span></span>
                            </div>
                            <div className="justifiy-start items-center ml-3 flex">
                                {/* <span>{data.crea}</span> */}
                            </div>
                        </div>
                        <div className="flex  mt-5 w-full h-full grid grid-cols-2">
                            <div className="flex-1 justify-center flex p-2">
                                <Image src={QuestionPhoto} width={150}   alt="question-photo-fetch"/>
                            </div>
                            <span className="flex-1  justify-start  h-full w-full break-all pr-3">
                                {data.problemDescription.length>90?
                                data.problemDescription.substring(0,90)+'...':
                                data.problemDescription}
                            </span>
                        </div>
                        <Link href={`/dashboard/community/corrections/solve&_${data.problemDomain}`} className="p-3 bg-blue-500 rounded-2xl text-white font-medium my-2 hover:bg-blue-700 transition duration-300 ease-in-out" >Solution Problem</Link>
                    </div>
                ))}
                </main>
            )
    )
}

export default DiscoverPage