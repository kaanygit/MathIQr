"use client"
import { endQuiz } from "@/redux/features/quiz-slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Button, Progress, Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";



interface QuizComponentPropsInterface{
    sendClassName:string;
    paramsValues:string;
}

const QuizComponent:React.FC<QuizComponentPropsInterface>=({sendClassName,paramsValues})=>{
    const [studentClass,setStudentClass]=useState<string>("");
    const quizStarted=useAppSelector((state)=>state.quizReducer.value.startExam);
    const dispatch=useAppDispatch();
    const router=useRouter();

    //Quiz TimeIntervel
    const initialTime:number=1*60;
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

    //console.log()
    console.log(progressPercentage);

    return(
        <section className="w-full h-screen flex flex-col justify-center p-12 mx-auto  overflow-y-auto shadow-xl">
            {progressPercentage!==0?(
                <>
                    <div className="w-full flex justify-between">
                        <span className="text-4xl font-bold flex justify-start text-blue-400">Soru 1</span>
                        <Button color="red" type="button" onClick={handleOutQuiz}>Sınavı bitir</Button>
                    </div>
                    <div className="mt-5">
                        <Typography color="blue" className="flex justify-end" variant="h5">{minutes.toString().padStart(2,"0")}:{seconds.toString().padStart(2,"0")}</Typography>
                        <div className="w-full h-4 bg-gray-200 rounded-full">
                            <div className="h-full bg-black rounded-full transform duration-1000 ease-in-out"style={{ width: `${progressPercentage}%` }}></div>
                        </div>
                    </div>
                    <div className="mt-5 text-xl">
                        <span>Bir çiftçi, tarlasındaki buğdayları hasat etmek için çalışmaktadır. Tarlasının şekli dörtgen olup, 1000 metre uzunluğunda ve 500 metre genişliğindedir. Çiftçi, buğdayları hasat etmek için tarlasını iki eş parçaya bölmek istemektedir. Her iki parçanın da eşit büyüklükte ve aynı şekilde olmasını istiyor.Çiftçi, tarlasını kaç eşit parçaya bölmelidir?</span>
                    </div>
                    <div className="flex grid grid-cols-2 gap-5 mt-8 text-xl">
                        {Array.from({length:4}).map((buttonMap:any,index:number)=>(
                        <div className="w-full flex bg-gray-400 justify-start items-center text-center" key={index}>
                            <Button color="blue" className=" text-xl" fullWidth> A) {index+2} </Button> 
                        </div>
                        ))}
                    </div>
                </>
            ):(
                <span className="text-5xl flex justify-center items-center font-bold">Süre Sona Ermiştir ! 🥳</span>
            )}
        </section>
    )
};

export default QuizComponent;