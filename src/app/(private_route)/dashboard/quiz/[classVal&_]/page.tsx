"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image';

import ClassValParams from '../../../../../json/quiz_page/quiz-domain.json';
import QuizSubjectValue from '../../../../../json/quiz_page/quiz-subject.json';
import { LoadingComponent, QuizComponent } from '@/component/component.export';
import { ClassData, SubjectClass } from '../../exam/page';
import  testImage from '../../../../../assets/examallofthem.png'

import {FcApproval} from 'react-icons/fc';
import { BiSolidTimeFive } from 'react-icons/bi';
import { startingQuiz } from '@/redux/features/quiz-slice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

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
    const dispatch=useAppDispatch();
    const quizStarted=useAppSelector((state)=>state.quizReducer.value.startExam);

    const [quizSubjectData,setQuizSubjectData]=useState<SubjectClass>();
    const [matchedData,setMatchedData]=useState<string>("");
    const [matchedDataLoading,setMatchedDataLoading]=useState<boolean>(true);
    const [sendClassName,setSendClassName]=useState<string>("");
    const [startQuiz,setStartQuiz]=useState<boolean>(false);

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
                setSendClassName(classing);
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
        try {
            console.log("SINAV BAŞLADI!");
            console.log(sendClassName);
            setStartQuiz(true);
            dispatch(startingQuiz(true));
        } catch (error) {
            console.error("Sınav Başlatılırken Hata Oluştu : ",error);
        }
    }
    
    console.log(matchedData);
    console.log(quizStarted);
    return(
        matchedDataLoading?(<LoadingComponent/>):(
            matchedData===""?(
                <section className="mx-auto w-full h-screen text-3xl font-bold text-blue-400 flex flex-col justify-center items-center  pb-10 " style={{width:"1000px"}}>
                        Aradığınız Sınav Bulunamadı :(
                </section>
            ):(
                    <section className="w-full h-screen flex flex-col justify-center items-center p-24 mx-auto  overflow-y-auto">
                        {!startQuiz?(
                            <div className='w-full  flex justify-center items-center p-3 shadow-inner rounded-lg shadow-xl'>
                                <div className='flex justify-center items-center text-center '>
                                    <Image src={testImage} width={300} alt='community-page-navbar-photo'/>
                                </div>
                                <div className='flex-1 flex flex-col justify-start pl-3 w-full pt-3'>
                                    <div className='flex flex-row'>
                                        <span className='flex-1 font-bold text-3xl justify-start '>{quizSubjectData?.subject_title}</span>
                                        <div className='flex justify-end flex-col items-center'>
                                            <div className='flex flex-row justify-center items-center'>
                                                <button type='button' onClick={handleStartQuiz} className={`${quizSubjectData?.subject_content[0].exam_completed===false?null:"bg-gray-500"} justify-center items-center text-center flex bg-blue-500 font-medium text-white rounded-lg px-2 py-2 transform duration-500 ease-in-out hover:bg-blue-700 mr-2`}>Sınava Gir</button>
                                                <span className='justify-center items-center flex mr-2 text-2xl'>{quizSubjectData?.subject_content[0].exam_completed===false?null:<FcApproval/>}</span>
                                            </div>
                                            <span className='justify-center items-center flex mr-2 mt-2 text-xl'><BiSolidTimeFive/><span className='ml-2'>{quizSubjectData?.subject_content[0].exam_duration} Dakika</span></span>
                                        </div>
                                    </div>
                                    <span className='mt-2 mb-2'>{quizSubjectData?.subject_content[0].exam_name}</span>
                                    <span>{quizSubjectData?.subject_content[0].exam_content}</span>
                                </div>
                            </div>
                        ):(
                            paramsValues?<QuizComponent sendClassName={sendClassName} paramsValues={paramsValues}/>:<div>Hata oluştu</div>
                        )}

                    </section>       
            )
        )


    )
}

export default QuizSolutionPage