"use client"
import { Spinner } from "@material-tailwind/react";



const LoadingComponent:React.FC=()=>{
    return(
        <div className="flex items-center gap-8 items-center text-center justify-center h-screen w-full">
            <Spinner className="h-48 w-48" />
        </div>
    )
}
export default LoadingComponent