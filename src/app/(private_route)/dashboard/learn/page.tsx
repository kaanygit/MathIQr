"use client"
import { Slider } from "@material-tailwind/react"
import { useEffect, useRef, useState } from "react"




const LearnPage:React.FC=()=>{
    const [sliderValue,setSliderValue]=useState<number>(50);
    const handleSliderChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const value=parseInt(e.target.value);
        const values=Math.floor(value);
        setSliderValue(values);
    }
    console.log(sliderValue);
    return(
        <section className="mx-auto flex flex-col w-full h-full px-24 pt-12 pb-24 justify-center items-center text-center">
            <div className="flex justify-center items-center text-center text-3xl font-bold">
                <span>10.Sınıf Lesson Page</span>
            </div>
            <div className="flex justify-center items-center text-center mt-8 w-full px-96">
                <Slider color="blue" value={sliderValue} onChange={handleSliderChange} />
                <span className="pl-3 text-4xl">{sliderValue}%</span>
            </div>
            <div className="flex justify-center items-center text-center">

            </div>
        </section>

    )
}

export default LearnPage