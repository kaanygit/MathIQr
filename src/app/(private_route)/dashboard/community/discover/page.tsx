"use client"
import Image from "next/image"
import UserPhoto from '../../../../../assets/user_reset_png.png'
import QuestionPhoto from '../../../../../assets/math-problem-photo.jpg'
import { useEffect, useState } from "react"
import Link from "next/link"
import axios from "axios"
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
    updatedAt:Date;
    __v:Number;
    createdAt:Date;
}



const DiscoverPage:React.FC=()=>{
    const [discoverPostData,setDiscoverPostData]=useState<SharePostDataInterface[]|undefined>(undefined);
    const [discoverDataLoading,setDiscoverDataLoading]=useState<boolean>(false);
    const [discoverPostDataLength,setDiscoverPostDataLength]=useState<number>(0);
    const [currentPage,setCurrentPage]=useState<number>(1);
    const itemsPerPage:number=20;
    
   useEffect(()=>{
        //discover data fetch
        const discoverFetchData=async()=>{
            setDiscoverDataLoading(true);
            try {
                const{data:response}=await axios.get('/api/datacom/posts');
                setDiscoverPostData(response.CommunityPosts);
                setDiscoverDataLoading(false);
                setDiscoverPostDataLength(response.CommunityPosts?.length);
            } catch (error) {
                console.log('Veri Getirilirken Hata Oluştu : ',error);
            }
        }
        discoverFetchData();
    },[])
    
    const totalPages:number=discoverPostDataLength!==undefined?Math.ceil(discoverPostDataLength/itemsPerPage):0;
    const handlePageChange=(newPage:number)=>{
        setCurrentPage(newPage);
    }

    const startIndex=(currentPage-1)* itemsPerPage;
    const endIndex=currentPage*itemsPerPage;
    const itemsToDisplay=discoverPostData?.slice(startIndex,endIndex);
    
    console.log(startIndex,endIndex);
    console.log(discoverPostDataLength);
    console.log(discoverDataLoading);
    console.log(discoverPostData);
    return(
        discoverDataLoading?(
                <span className="justify-center items-center text-center w-full h-screen flex">
                    <Spinner className="h-48 w-48"/>
                </span>
            ):(
            <>
            <span className="justify-center flex h-full w-full items-center text-center text-3xl font-bold text-blue-500">Discover</span>
            <main className="grid grid-cols-3 gap-6 w-full h-full justify-center flex mt-5">
                {discoverPostData!==undefined && itemsToDisplay?.map((datass,index)=>(
                    <div className="w-full h-full flex flex-col justify-center items-center bg-gray-300 mx-auto rounded-2xl shadow-lg" key={discoverPostData[index]._id}>
                        <div className="items-center flex mt-2">
                            <div className="flex justify-center items-center">
                                <Image src={UserPhoto} width={75} className="rounded-full" alt="user-photo-fetch"/>
                            </div>
                            <div className="justify-start flex ml-3 flex-col font-medium text-md">
                                <span className="font-bold text-xl">{discoverPostData[index].userName}</span>
                                <span>CLASS:<span className=" ml-2">{discoverPostData[index].grade}</span></span>
                                <span>SUBJECT:<span className="ml-2">{discoverPostData[index].subject}</span></span>
                            </div>
                            {/* <div className="justifiy-start items-center ml-3 flex">
                                // <span>{data.crea}</span>
                            </div> */}
                        </div>
                        <div className="flex  mt-5 w-full h-full grid grid-cols-2">
                            <div className="flex-1 justify-center flex p-2">
                                <Image src={QuestionPhoto} width={150}   alt="question-photo-fetch"/>
                            </div>
                            <span className="flex-1  justify-start  h-full w-full break-all pr-3">
                                {discoverPostData[index].problemDescription.length>90?
                                discoverPostData[index].problemDescription.substring(0,90)+'...':
                                discoverPostData[index].problemDescription}
                            </span>
                        </div>
                        <Link href={`/dashboard/community/corrections/solve&_${discoverPostData[index].problemDomain}`} className="p-3 bg-blue-500 rounded-2xl text-white font-medium my-2 hover:bg-blue-700 transition duration-300 ease-in-out" >Solution Problem</Link>
                    </div>


                //     discoverPostData?.map((data)=>( 
                //         <div className="w-full h-full flex flex-col justify-center items-center bg-gray-300 mx-auto rounded-2xl shadow-lg" key={data._id}>
                //             <div className="items-center flex mt-2">
                //                 <div className="flex justify-center items-center">
                //                     <Image src={UserPhoto} width={75} className="rounded-full" alt="user-photo-fetch"/>
                //                 </div>
                //                 <div className="justify-start flex ml-3 flex-col font-medium text-md">
                //                     <span className="font-bold text-xl">{data.userName}</span>
                //                     <span>CLASS:<span className=" ml-2">{data.grade}</span></span>
                //                     <span>SUBJECT:<span className="ml-2">{data.subject}</span></span>
                //                 </div>
                //                 {/* <div className="justifiy-start items-center ml-3 flex">
                //                     // <span>{data.crea}</span>
                //                 </div> */}
                //             </div>
                //             <div className="flex  mt-5 w-full h-full grid grid-cols-2">
                //                 <div className="flex-1 justify-center flex p-2">
                //                     <Image src={QuestionPhoto} width={150}   alt="question-photo-fetch"/>
                //                 </div>
                //                 <span className="flex-1  justify-start  h-full w-full break-all pr-3">
                //                     {data.problemDescription.length>90?
                //                     data.problemDescription.substring(0,90)+'...':
                //                     data.problemDescription}
                //                 </span>
                //             </div>
                //             <Link href={`/dashboard/community/corrections/solve&_${data.problemDomain}`} className="p-3 bg-blue-500 rounded-2xl text-white font-medium my-2 hover:bg-blue-700 transition duration-300 ease-in-out" >Solution Problem</Link>
                //         </div>
                //     ))
                ))}
                </main>
                {discoverPostData!==undefined && discoverPostDataLength==0?(
                    <div className="w-full h-full flex mt-10 justify-center items-center text-center font-medium text-3xl">Posts is not found 😞</div>
                ):null}
                <div className="flex justify-center mt-5 text-xl ">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <span
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`mx-2 cursor-pointer ${
                            currentPage === index + 1 ? 'text-blue-500' : 'text-gray-500'
                        }`}
                        >
                        {index + 1}
                        </span>
                    ))}
                </div>
            </>
        )
    )
}

export default DiscoverPage