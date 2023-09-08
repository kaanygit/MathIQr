"use client"
import Image from "next/image"
import QuesitonPhoto from '../../../../../../assets/quizsolution.png'
import UserPhoto from '../../../../../../assets/user_reset_png.png'
import React, {ReactNode, useEffect, useState} from 'react'

import {BiLike,BiDislike} from 'react-icons/bi'
import {MdOutlineAddPhotoAlternate} from 'react-icons/md'
import { Spinner, Textarea } from "@material-tailwind/react";
import { useParams } from "next/navigation"
import axios from "axios"
import { LoadingComponent } from "@/component/component.export"
import Link from "next/link"
import { getSession } from "next-auth/react"
import { SharePostDataInterface } from "../../discover/page"


interface ParamsProps{
    params:{
        'solve&_': string;
    }
}

interface SolutionsInterface {
    postId: String;
    userName: String;
    grade: String;
    solutionsDate: Date;
    solutionsPhotos: String[];
    solutionsDescription: String;
    like: Number;
    dissLike: Number;
}
  
interface MatchkedDataInterface {
    _id:string;
    userPhoto:String;
    userName:String;
    grade:String;
    subject:String;
    creationDate:Date;
    photos:String[];
    problemDescription:String;
    solutions:SolutionsInterface[];
    problemDomain:String;
    updatedAt:Date;
    __v:Number;
    createdAt:Date;
    areWeFriends:String[];
}
  const FormValueInitialState:SolutionsInterface={
    postId: "",
    userName: "",
    grade: "",
    solutionsDate: new Date(),
    solutionsPhotos: [],
    solutionsDescription: "",
    like: 0,
    dissLike: 0,
  }

 
const MatchkedDataInitialState:MatchkedDataInterface={
    _id: "",
    userPhoto: "",
    userName: "",
    grade: "",
    subject: "",
    creationDate: new Date(),
    photos: [],
    problemDescription: "",
    solutions: [],
    problemDomain: "",
    updatedAt: new Date(),
    __v: 0,
    createdAt: new Date(),
    areWeFriends: [],
}


const CorrectionsPage:React.FC<ParamsProps>=({params})=>{
    const paramsValues:string|null=params['solve&_']?params['solve&_'].substring(9):null;
    const [openSolutionPlace,setOpenSolutionPlace]=useState<boolean>(false);

    const [solvePagePostData,setSolvePagePostData]=useState<MatchkedDataInterface[]>([]);
    const [solvePageDataLoading,setSolvePageDataLoading]=useState<boolean>(false);
    const [solvePageForEachFailure,setSolvePageForEachFailure]=useState<boolean>(false);

    const [domainParamsValues,setDomainParamsValues]=useState<boolean>(false);
    const [domainValueHave,setDomainValueHave]=useState<boolean>(false); 
    const [matchedData,setMatchedData]=useState<MatchkedDataInterface|undefined>(undefined);



    const [formValue,setFormValue]=useState<SolutionsInterface>(FormValueInitialState);
    const [selectedOption, setSelectedOption] = useState<string|undefined>('');

    const {postId,userName,grade,solutionsDate,solutionsPhotos,solutionsDescription,like,dissLike}=formValue;
    const handleTextAreaChange=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
        const newTextArea=e.target.value;
        setSelectedOption(newTextArea);
        setFormValue((prevForm)=>({
            ...prevForm,
            solutionsDescription:newTextArea
        }))
    }

    
    useEffect(()=>{
        const setSessionData=async()=>{
            try {
                const session=await getSession();
                if(session?.user){
                    setFormValue((prevData)=>({
                          ...prevData,
                          userName:session.user.username,
                          grade:session.user.classing,
                      }))  
                }else{
                    console.log('Session Gelemedi');
                }
            } catch (error) {
                console.log('Error : ', error);     
            }
        }
        setSessionData();
    },[])
    console.log(formValue);



    useEffect(()=>{
        //discover data fetch
        console.log(paramsValues);
        const discoverFetchData=async()=>{
            setSolvePageDataLoading(true);
            try {
                const{data:response}=await axios.get('/api/datacom/posts');
                setSolvePagePostData(response.CommunityPosts);
                setSolvePageDataLoading(false);
            } catch (error) {
                console.log('Veri Getirilirken Hata Oluştu : ',error);
                setSolvePageForEachFailure(true);
            }
        }
        
        discoverFetchData();

    },[])
    useEffect(()=>{
        const forEachParamsData=()=>{
            if(solvePagePostData!=undefined){
                    let found:boolean=false;
                    for(const e of solvePagePostData){
                        setMatchedData(e);
                        setFormValue((prevData)=>({
                            ...prevData,
                            postId:e._id
                        }))
                        if(e.problemDomain===paramsValues){
                            console.log(e.problemDomain);
                            found=true;
                            break;
                        }
                    }
                    setDomainParamsValues(found);
                }else{
                    setSolvePageForEachFailure(true);
                }
            setDomainValueHave(true);
        }
        forEachParamsData();
    },[paramsValues, solvePagePostData])
    

    const testVerisidir=()=>{
                let found:boolean=false;
                for(const e of solvePagePostData){
                    setMatchedData(e);
                    setFormValue((prevData)=>({
                        ...prevData,
                        postId:e._id
                    }))
                    if(e.problemDomain===paramsValues){
                        console.log(e.problemDomain);
                        found=true;
                        break;
                    }
                }
                setDomainParamsValues(found);
                setDomainValueHave(true);
            }

    const handleFormData=async(e:React.ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try {
            console.log(formValue);
            const response=await fetch('/api/datacom/postup',{
                method:"PUT",
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(formValue)
            })
            if(response.ok){
                console.log("Veri Başarılı bir şekilde güncellendi ! ");
                setOpenSolutionPlace(false);
                testVerisidir();
            }else{
                console.error('Veri Güncellenme sırasında sorun oluştu !!!');
            }
        } catch (error) {
            console.log('Error : ', error);     
        }
    }

    console.log(matchedData);
    if(domainValueHave===false)return <LoadingComponent/>;
    return ( 
 
        !domainParamsValues?(
        <section className="mx-auto w-full h-screen flex flex-col justify-center items-center text-4xl" style={{width:"1000px"}}>
            Aradığınız Problem Bulunamadı :(
        </section>
        ):(
        <section className="mx-auto w-full h-full flex flex-col justify-center items-center  pb-10 " style={{width:"1000px"}}>


            <div className="w-full h-full flex flex-col justify-center items-center mt-3" >
                <div className="flex-1 flex justify-center items-center px-5  w-full" >
                    <Image src={QuesitonPhoto} width={200}  alt="quesiton-photos"/>
                    <Image src={QuesitonPhoto} width={200}  alt="quesiton-photos"/>
                    <Image src={QuesitonPhoto} width={200}  alt="quesiton-photos"/>
                </div>
                <div className="border-4 flex flex-col justify-center w-full p-5 rounded-xl">
                    <div className="flex flex-row justify-between">
                        <div className="flex-1 flex justify-start items-center">
                            <Link href={`/dashboard/profile/${matchedData?.userName}`}>
                                <Image src={UserPhoto} className="rounded-full" width={100} alt="user-corrections-photo"/>
                            </Link>
                            <div className="flex flex-col justify-start w-full ml-2">
                                <Link href={`/dashboard/profile/${matchedData?.userName}`} className="text-xl font-bold">{matchedData?.userName}</Link>
                                <span>{matchedData?.grade}</span>
                                <span>{matchedData?.subject}</span>
                            </div>
                        </div>
                        <div className="flex justify-end items-center">
                            <button className="p-3 bg-blue-500 rounded-2xl text-white font-medium my-2 hover:bg-blue-700 transition duration-300 ease-in-out">Add Friend</button>
                        </div>
                    </div>
                    <span className="mt-2">{matchedData?.createdAt?.toLocaleString()}</span>
                    <span className="mt-2">{matchedData?.problemDescription}</span>
                </div>


            </div>
            
            {openSolutionPlace?(
                    <form onSubmit={handleFormData} className='flex flex-col border-4 rounded-xl w-full p-5 m-5'>
                        <div className='flex flex-row w-full'>
                            <span className='flex flex-1 justify-center items-center text-4xl cursor-pointer border-4 mr-2'><MdOutlineAddPhotoAlternate/></span>
                            <div className='flex-1 flex'>
                                <Textarea label="Solution" size="lg" name="solutionsDescription" rows={12} cols={40} onChange={handleTextAreaChange} value={solutionsDescription.toString()}/>
                            </div>
                        </div>
                        <button type="submit" className="py-3 px-16 bg-blue-500 rounded-2xl text-white font-medium my-5 hover:bg-blue-700 transition duration-300 ease-in-out" >Gönder</button>
                    </form>
            ):(
                <button type="button" className="py-3 px-16 bg-blue-500 rounded-2xl text-white font-medium my-5 hover:bg-blue-700 transition duration-300 ease-in-out" onClick={()=>setOpenSolutionPlace(true)}>Solution</button>
            )}
                
            {matchedData?.solutions && matchedData?.solutions.length>0?(
            <>
                {matchedData?.solutions.map((solutionData,index:number)=>(
                    <div className="w-full flex flex-row mb-4 h-full justify-center " key={index} >
                        <div className="border-4 flex flex-1 flex-col justify-center w-full h-full p-5 rounded-xl max-h-1000 overflow-y-auto ">
                            <div className="flex flex-row justify-between">
                                <div className="flex-1 flex justify-start items-center">
                                    <div>
                                        <Image src={UserPhoto} className="rounded-full" width={100} alt="user-corrections-photo"/>
                                    </div>
                                    <div className="flex flex-col justify-start w-full ml-2">
                                        <Link href={`/dashboard/profile/${matchedData?.solutions[index].userName}`} className="text-xl font-bold">{matchedData?.solutions[index].userName}</Link>
                                        <span>{matchedData?.solutions[index].grade+"th Grade"}</span>
                                    </div>
                                </div>
                                <div className="flex justify-end items-center">
                                    <div className='flex flex-row mr-2 justify-center items-center'>
                                        <button className="flex justify-center items-center text-center p-3 mr-2 bg-blue-500 rounded-2xl text-white font-medium my-5 hover:bg-blue-700 transition duration-300 ease-in-out"><span className="justify-center flex items-center text-center mr-2">{matchedData?.solutions[index].like}</span><BiLike className="text-xl font-bold"/></button>
                                        <button className="flex justify-center items-center text-center p-3 bg-blue-500 rounded-2xl text-white font-medium my-5 hover:bg-blue-700 transition duration-300 ease-in-out"><span className="justify-center flex items-center text-center mr-2">{matchedData?.solutions[index].disslike}</span><BiDislike className="text-xl font-bold"/></button>
                                    </div>
                                    <button className="p-3 bg-blue-500 rounded-2xl text-white font-medium my-2 hover:bg-blue-700 transition duration-300 ease-in-out">Add Friend</button>
                                </div>
                            </div>
                            <span className="mt-2">{matchedData?.solutions[index].solutionsDate.toLocaleString()}</span>
                            <span className="mt-2 bg-blue-100 p-2 rounded-xl break-words w-full h-full">{matchedData.solutions[index].solutionsDescription}</span>
                        </div>
                    </div>
                ))}
            </>

            ):(
                <div className="w-full h-full pt-10 justify-center items-center text-center text-4xl">
                    Solution is not found
                </div>
            )} 

        </section>
        ))
}

export default CorrectionsPage