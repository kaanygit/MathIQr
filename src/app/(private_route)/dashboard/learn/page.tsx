"use client"

import { Slider } from "@material-tailwind/react"
import Image from "next/image";
import { useEffect, useRef, useState } from "react"
import Link from "next/link";
import ContentData from '../../../../json/learn_page/class-and-content.json'
import { useSession } from "next-auth/react";
import { SessionDataInterface } from "../profile/page";
import { LoadingComponent, LoadingDotComponent } from "@/component/component.export";
import DenemeResim from '../../../../assets/user_reset_png.png' 


interface Lesson {
    Lesson_Name: string;
    Lesson_Content: string;
    Lesson_Completed: string;
    Lesson_Image: string;
    Lesson_Domain_Params:string;
}
  
  interface Unit {
    Unit: string;
    Unit_Content: string;
    Unit_Completed: string;
    Lesson: Lesson[];
  }
  
  interface ClassData {
    [key: string]: Unit[];
  }



const LearnPage:React.FC=()=>{
    const {data:session,status}=useSession();
    const datas: SessionDataInterface[] | null = session?.user ? [session.user] : null;
    const sessionData=datas!==null?datas[0]:null;
    const [sliderValue,setSliderValue]=useState<number>(50);
    const [topArrowVisiable,setTopArrowVisiable]=useState<boolean>(false);
    const unlockedSection:string="filter brightness-75 grayscale";
    
    const [classDataState,setClassDataState]=useState<string>("");
    const classData: ClassData = ContentData;
    const classDataLen=classDataState!==""?classData[classDataState].length:null;

    console.log(classDataLen);
    useEffect(()=>{
        // status==="authenticated" && sessionData?.classing ?setClassDataState(`${sessionData.classing}.Class`) : setClassDataState("");
        sessionData?.classing ?setClassDataState(`${sessionData.classing}.Class`) : setClassDataState("");
    },[])



    const handleSliderChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const value:number=parseInt(e.target.value);
        const values:number=Math.floor(value);
        setSliderValue(values);
    }




    return(
        <section className="relative mx-auto flex flex-col w-full h-full px-24 pt-12 pb-24 justify-center items-center text-center">
            <div className="flex justify-center items-center text-center text-4xl font-bold">
                <span>{status==="unauthenticated"||status==="loading"?<LoadingDotComponent/>:sessionData?.classing}th Grade Course</span>
            </div>
            <div className="flex justify-center items-center text-center mt-8 w-full px-96">
                <Slider color="blue" value={sliderValue} onChange={handleSliderChange} />
                <span className="pl-3 text-4xl">{sliderValue}%</span>
            </div>
            <div className="flex justify-center items-center text-center w-full h-full mt-10">
                <div className="flex justify-center items-center text-center grid grid-cols-1  h-full w-1/2">
            {classDataState===""?(<LoadingComponent/>):(
                Array.from({length:classData[classDataState].length}).map((_,index)=>(
                    <div className=" w-full justify-center items-center text-center" key={index}>
                        <div className="w-full flex flex-row text-white bg-blue-500 rounded-3xl">
                            <div className="flex-1  flex-col flex justify-start pl-10 py-5 text-3xl">
                                <span className="flex justify-start font-bold">{classData[classDataState][index].Unit}</span>
                                <span className="flex justify-start font-extralight pt-3 ">{classData[classDataState][index].Unit_Content}</span>
                            </div>
                            <div className="flex-initial  w-64 justify-center items-center flex pr-5 text-2xl font-medium">
                                <span>Completed : </span>
                                <span>1/5</span>
                            </div>
                        </div>
                        {classData[classDataState][index].Lesson.map((course,lessonIndex)=>(
                                <div className="w-full h-full  mt-5 mb-5 flex justify-center items-center grid grid-cols-1" key={lessonIndex}>
                                    <div className="w-full h-full  justify-center items-center text-center flex">
                                        <Image src={DenemeResim} width={5} height={5} alt="section-lesson-unit-photo.png" className="flex-initial w-32 rounded-full p-3"/>
                                        <Link href={`learn/lesson/${course.Lesson_Domain_Params}`} className="flex-1 flex flex-col justify-center items-center text-center p-3 hover:bg-gray-200 transition duration-300 ease-in-out rounded-2xl">
                                            <span className="w-full flex justify-start text-xl font-bold">{course.Lesson_Name}</span>
                                            <span className="w-full flex justify-start text-lg font-normal">{course.Lesson_Content}</span>
                                        </Link>
                                    </div>
                                </div>
                            

                        ))}


                </div>
                    
                ))






)}
                </div>
            </div>
        </section>

    )
}

export default LearnPage