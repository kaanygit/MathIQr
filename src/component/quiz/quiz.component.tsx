"use client"
import { endQuiz } from "@/redux/features/quiz-slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Button, Typography } from "@material-tailwind/react";
import { Fragment, useEffect, useState } from "react";
import { Exam } from "@/app/(private_route)/dashboard/exam/page";


interface QuizComponentPropsInterface{
    sendClassName:string;
    paramsValues:string;
    sendToQuestions:Exam;
}

const QuizComponent:React.FC<QuizComponentPropsInterface>=({sendClassName,paramsValues,sendToQuestions})=>{
    const [studentClass,setStudentClass]=useState<string>("");
    const quizStarted=useAppSelector((state)=>state.quizReducer.value.startExam);
    const dispatch=useAppDispatch();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);


    //Quiz TimeIntervel
    const initialTime:number=sendToQuestions.exam_duration*60;
    const [timeLeft,setTimeLeft]=useState<number>(initialTime);
    useEffect(()=>{
        let timer:any;
        if(timeLeft>0){
            timer=setInterval(()=>{
                setTimeLeft((prevTime)=>prevTime-1);
            },1000);
        }else{
            clearInterval(timer);
            console.log('Süre Bitti');
            setTimeout(()=>handleOutQuiz(),5000);
        }
        return ()=>clearInterval(timer);
    },[timeLeft]);
    const minutes:number=Math.floor(timeLeft/60);
    const seconds:number=timeLeft%60;
    const progressPercentage:number = 100-(((initialTime - timeLeft) / initialTime) * 100);
    


    // Studentset Class
    useEffect(()=>{
        setStudentClass(sendClassName);
        console.log(quizStarted);
    },[studentClass,quizStarted]);
    


    // quit the quiz
    const handleOutQuiz=()=>{
        dispatch(endQuiz());
        window.location.reload();
    }

    //next question
    const handleNextQuestion=()=>{
        if (currentQuestionIndex < sendToQuestions.questions_content.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
          }else{
            window.location.reload();
        }
    }

    //console.log()

    return(
        <section className="w-full h-screen flex flex-col justify-center p-12 mx-auto  overflow-y-auto shadow-xl">
            {progressPercentage!==0?(
                    <Fragment>
                        <div className="w-full flex justify-between">
                            <span className="text-4xl font-bold flex justify-start text-blue-400">Soru {currentQuestionIndex+1}</span>
                            <Button color="red" type="button" onClick={handleOutQuiz}>Sınavı bitir</Button>
                        </div>
                        <div className="mt-5">
                            <Typography color="blue" className="flex justify-end" variant="h5">{minutes.toString().padStart(2,"0")}:{seconds.toString().padStart(2,"0")}</Typography>
                            <div className="w-full h-4 bg-gray-200 rounded-full">
                                <div className="h-full bg-black rounded-full transform duration-1000 ease-in-out"style={{ width: `${progressPercentage}%` }}></div>
                            </div>
                        </div>
                        <div className="mt-5 text-xl">
                            <span>{sendToQuestions.questions_content[currentQuestionIndex].question_title}</span>
                        </div>
                        <div className="flex grid grid-cols-2 gap-5 mt-8 text-xl">
                            {Array.from({length:4}).map((buttonMap:any,index:number)=>(
                            <div className="w-full flex bg-gray-400 justify-start items-center text-center" key={index}>
                                <Button color="blue" className=" text-xl" fullWidth> A) {sendToQuestions.questions_content[currentQuestionIndex].question_answer} </Button> 
                            </div>
                            ))}
                        </div>
                        <Button variant="text" className="flex items-center justify-center items-center gap-2 mt-4" onClick={handleNextQuestion}>Sonraki Soru {""}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/></svg>          </Button>
                    </Fragment>
            ):(
                <span className="text-5xl flex justify-center items-center font-bold">Süre Sona Ermiştir ! 🥳</span>
            )}
        </section>
    )
};

export default QuizComponent;