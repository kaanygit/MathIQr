"use client"

import { useEffect, useState } from 'react';
import ClassValParams from '../../../../../json/quiz_page/quiz-domain.json';
import QuizSubjectValue from '../../../../../json/quiz_page/quiz-subject.json';
import { LoadingComponent } from '@/component/component.export';
import Image from 'next/image';
import  testImage from '../../../../../assets/examallofthem.png'
import { ClassData, SubjectClass } from '../../exam/page';
import {FcApproval,FcCancel} from 'react-icons/fc';

interface PageParams{
    params:{
        'classVal&_': string;
    }
}
interface ClassValueParamsInterface{
    [key:string]:string[];
}

// 1.sınıftansonraı geliecek

const QuizSolutionPage:React.FC<PageParams>=({params})=>{
    const paramsValues:string|null=params["classVal&_"]?params["classVal&_"].substring(12):null;
    const classValue:ClassValueParamsInterface=ClassValParams;
    const quizSubjectValues:ClassData=QuizSubjectValue;


    const [quizSubjectData,setQuizSubjectData]=useState<SubjectClass>();
    const [matchedData,setMatchedData]=useState<string>("");
    const [matchedDataLoading,setMatchedDataLoading]=useState<boolean>(true);


    useEffect(()=>{
        const forEachParamsData=()=>{
            if(paramsValues!==undefined && classValue!==undefined){
                setMatchedDataLoading(true); 
                let found:boolean=false;
                for(const e of classValue["classVal&_"]){
                    if(e===paramsValues){
                        setMatchedData(e);
                        found=true;
                        setMatchedDataLoading(false);
                        break;
                    }                    
                }
                if(found===false){
                    console.log("aradığınız params bulunamamıştır");
                    setMatchedDataLoading(false);
                }

            }else{
                console.log("Aradığınz params bulunamadı");
            }
        }
        forEachParamsData();
    },[classValue,paramsValues])

    
    useEffect(()=>{
        const forEachSubjectContent=()=>{
            if(quizSubjectValues!==undefined && paramsValues!==null){
                let classing:string=paramsValues[0]+".Sınıf";
                console.log(classing);
                let content:boolean=false;
                for(const e of quizSubjectValues[classing]){
                    for(const i of e.subject_content){
                        if(i.exam_domain_params===paramsValues){
                            let content=true;
                            setQuizSubjectData(e);
                            break;
                        }
                    }
                }
            }else{
                console.log("İçerik Getirilirken hata oluştur!");
            }
        }
        forEachSubjectContent();
    },[paramsValues,quizSubjectValues])


    const handleStartQuiz=()=>{
        console.log("SINAV BAŞLADI!");
    }
    
    return(
        matchedDataLoading?(<LoadingComponent/>):(
            matchedData===""?(
                <section className="mx-auto w-full h-screen text-3xl font-bold text-blue-400 flex flex-col justify-center items-center  pb-10 " style={{width:"1000px"}}>
                        Aradığınız Sınav Bulunamadı :(
                </section>
            ):(
                    <section className="w-full h-full flex flex-col justify-center items-center p-24 mx-auto  overflow-y-auto">
                        <div className='w-full h-full flex justify-center items-center p-3 shadow-md rounded-lg  '>
                            <div className='flex justify-center items-center text-center '>
                                <Image src={testImage} width={300} alt='community-page-navbar-photo'/>
                            </div>
                            <div className='flex-1 flex flex-col justify-start pl-3 w-full pt-3'>
                                <div className='flex flex-row'>
                                    <span className='flex-1 font-bold text-3xl justify-start '>{quizSubjectData?.subject_title}</span>
                                    <span className='justify-center items-center flex mr-2 text-xl'>{quizSubjectData?.subject_content[0].exam_completed===false?null:<FcApproval/>}</span>
                                    <button className='justify-center items-center text-center flex bg-blue-500 font-medium text-white rounded-lg px-2 py-2 transform duration-500 ease-in-out hover:bg-blue-700 mr-8'>Sınava Gir</button>
                                </div>
                                <span className='mt-2 mb-2'>{quizSubjectData?.subject_content[0].exam_name}</span>
                                <span>{quizSubjectData?.subject_content[0].exam_content}</span>
                            </div>
                        </div>
                    </section>       
            )
        )


    )
}

export default QuizSolutionPage