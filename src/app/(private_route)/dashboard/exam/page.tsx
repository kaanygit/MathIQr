"use client"
import {  useState } from 'react';
import ExamSubjectJSONFile from '../../../../json/quiz_page/quiz-subject.json'
import ClassJSONFile from '../../../../json/scholl-grades.json'
import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react';
import Link from 'next/link';

export interface QuestionsContentInterface{
    question_title:string;
    question_answer:string;
}
export interface Exam{
    exam_name: string;
    exam_content_title: string;
    exam_completed: boolean;
    exam_image: string;
    exam_domain_params: string;
    exam_duration:number;
    questions_content:QuestionsContentInterface[];
}

export interface SubjectClass{
    subject_title:String;
    subject_completed:Boolean;
    subject_content:Exam[];
}

export interface ClassData{
    [key:string]:SubjectClass[];
}


const ExamPageDefault:React.FC = () => {
    const classSectionText:string[]=ClassJSONFile[2];
    const examSubjectData:ClassData=ExamSubjectJSONFile;
    const [activeClass,setActiveClass]=useState<number>(1);
    const [activeClassSubject,setActiveClassSubject]=useState<string>("1.Sınıf");
    const [accordionMenuOpen,setAccordionMenuOpen]=useState<number>(1);

    const handleAccordionMenu=(value:number)=>{
        setAccordionMenuOpen(accordionMenuOpen===value?0:value);
    }

    const handleActiveTab=(num:number,classing:string)=>{
       setActiveClass(num);
       setActiveClassSubject(num+".Sınıf");
    }
    
    return (
      <main className="w-full h-full flex flex-row mt-5 ">
        <div className="flex flex-col w-36 overflow-y-auto p-3 bg-gray-100 rounded-lg">
            {classSectionText.map((examClass:string,index:number)=>(
                <span key={index} onClick={()=>handleActiveTab(index+1,examClass)} className={`mb-2 font-medium  justify-center items-center flex shadow-lg rounded-lg  transition duration-500 ease-in-out ${(activeClass-1)===index?'text-blue-500':''} `}>{examClass}</span>
            ))}
        </div>
        <div className="flex flex-col w-full h-full bg-gray-100 p-3">
            <div className='w-full'>
                <span className='w-full justify-start flex font-bold text-3xl border-b-2 border-gray-300'>{activeClassSubject}</span>
            </div>
            <div className='flex mt-3 w-full h-full grid grid-cols-1 gap-5'>
                {examSubjectData[activeClassSubject]?.map((subject:any,index:number)=>(
                    <Accordion open={accordionMenuOpen===index+1} className='mb-2 rounded-lg border border-blue-gray-100 px-4' key={index} >
                        <AccordionHeader onClick={()=>handleAccordionMenu(index+1)} className={`border-b-0 transition-colors ${accordionMenuOpen === index+1 ? "text-blue-500 hover:!text-blue-700" : ""}`}>
                            {subject.subject_title}
                        </AccordionHeader>
                            <AccordionBody className="pt-0 text-base font-normal grid grid-cols-3 gap-5">
                            {subject.subject_content.map((data:any,index:number)=>(
                                <Link href={`/dashboard/quiz/classVal&_${data.exam_domain_params}`} key={index}>{data.exam_name}</Link>
                            ))}
                            </AccordionBody>
                    </Accordion>

                ))}
            </div>
        </div>
      </main>
    );
  };
  
  export default ExamPageDefault;
  