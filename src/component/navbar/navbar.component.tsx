"use client"
import { Spinner } from '@material-tailwind/react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link'
import { useState } from 'react';
import {BiMath,BiMoon, BiSun} from 'react-icons/bi'


const NavbarComponent:React.FC=()=>{
    const {data:session,status}=useSession();
    const currentMode:string|null=localStorage.getItem("darkmode");
    const [currentDarkMode,setCurrentDarkMode]=useState<string|null>(currentMode);
    const darkMode=()=>localStorage.setItem("darkmode","false");
    const sunMode=()=>localStorage.setItem("darkmode","true");
    const handleDarkMode=()=>{
        const mode:string|null=localStorage.getItem("darkmode");
        if(mode==null){
            sunMode();
            setCurrentDarkMode("true");
        }else{
            if(mode=="true"){
                darkMode();
                setCurrentDarkMode("false");
            }else{
                sunMode();
                setCurrentDarkMode("true");
            }
        }
    }



    console.log(session?.user);
    return(
        <nav className="w-full h-full mx-auto px-24 py-10 justify-center items-center text-center flex">
            <div className="flex w-full justify-center items-center text-2xl">
                <div className="flex-1 flex text-4xl">
                    <span className='text-4xl font-black'><BiMath/></span>
                    <Link href="/" className='pl-3 font-bold'>MathIQr</Link>
                </div>
                <div className="flex-1 flex justify-end text-center items-center font-medium">
                    {!session?<Link href='/authentication'>Login / Sign Up</Link>:<Link href="/dashboard">{session.user.username}</Link>}
                    <Link href='/about' className='pl-5'>About</Link>
                    <Link href='/contact' className='pl-3'>Contact</Link>
                    {session?<span className='pl-3 cursor-pointer' onClick={()=>signOut()}>SignOut</span>:null}
                    {currentDarkMode==="true"?<span className='pl-3'><BiSun className="cursor-pointer" onClick={handleDarkMode}/></span>:<span className='pl-3'><BiMoon className="cursor-pointer" onClick={handleDarkMode}/></span>}
                </div>
            </div>
        </nav>
    )
}

export default NavbarComponent