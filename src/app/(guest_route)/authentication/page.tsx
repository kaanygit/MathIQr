"use client"
import { useState } from "react";
import Image from "next/image"
import {BiMath} from 'react-icons/bi'
import EinstainBoard from '../../../assets/einstain-board.png'
import { SignInComponent, SignUpComponent } from "@/component/auth/auth.export";

const AuthenticationPage:React.FC=()=>{
    const [formSwitch,setFormSwitch]=useState<boolean>(false);
    const handleFormSwitch=()=>{
        setFormSwitch(!formSwitch);
    }

    return(
        <main className="w-full h-full p-24 flex justify-center items-center text-center mx-auto ">
            <div className="flex-1 bg-gray-200 h-full w-full rounded-2xl py-20 px-5">
                <div className="flex text-4xl font-bold">
                    <span><BiMath/></span>
                    <span className="pl-5">MathIQr</span>
                </div>
                <div className="flex justify-start pt-5 text-3xl font-medium">
                    <span>Welcome back</span>
                </div>
                <div className="flex justify-start pt-5 text-gray-500">
                    {!formSwitch?
                        <>
                            <span>Start your Math learning in seconds. Do you have an account?</span>
                            <button className="text-blue-500 pl-3" onClick={handleFormSwitch}>Sign In</button>
                        </>
                        :
                        <>
                            <span>Start your Math learning in seconds. Don’t have an account?</span>
                            <button className="text-blue-500 pl-3" onClick={handleFormSwitch}>Sign up</button>
                        </>
                    }
                </div>
                {formSwitch?(
                    <SignInComponent/>
                ):(
                    <SignUpComponent/>
                )}
            </div>
            <div>
                <Image src={EinstainBoard} width={800} alt="auth-image"/>
            </div>
        </main>
    )
}

export default AuthenticationPage