"use client"
import { SessionDataInterface } from '@/app/(private_route)/dashboard/[...profile]/page';
import { Spinner } from '@material-tailwind/react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import {BiMath,BiMoon, BiSun} from 'react-icons/bi'

const NavbarNotAuth:React.FC=()=>{
    const {data:session,status}=useSession();
    const datas: SessionDataInterface[] | null = session?.user ? [session.user] : null;

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

    const handleyukle=()=>{
        const datas=session?.user
        // dispatch(setUserDetails(datas));
    }
    useEffect(()=>{
        console.log(status);

    },[status])
    console.log(session?.user);
    console.log(datas);
    return(
        <nav className="w-full h-full mx-auto px-24 py-10 justify-center items-center text-center flex shadow">
            <div className="flex w-full justify-center items-center text-2xl">
                <div className="flex-1 flex text-4xl">
                    <span className='text-4xl font-black'><BiMath/></span>
                    <Link href="/" className='pl-3 font-bold'>MathIQr</Link>
                </div>
                <div className="flex-1 flex justify-end text-center items-center font-medium">
                    {/* {!session?<Link href='/authentication'>Login / Sign Up</Link>:<Link href="/dashboard">{session.user.username}</Link>} */}
                    {status==="loading"?(<Spinner/>):status==="unauthenticated"?(<Link href='/authentication'>Login / Sign Up</Link>):(<Link href="/dashboard">{datas?(datas[0].username):(null)}</Link>)}
                    <Link href='/about' className='pl-5'>About</Link>
                    <Link href='/contact' className='pl-3'>Contact</Link>
                    {/* {session?<span className='pl-3 cursor-pointer' onClick={()=>signOut()}>SignOut</span>:null} */}
                    {status==="loading"?(<Spinner/>):status==="unauthenticated"?(null):(<span className='pl-3 cursor-pointer' onClick={()=>signOut()}>SignOut</span>)}
                    {currentDarkMode==="true"?<span className='pl-3'><BiSun className="cursor-pointer" onClick={handleDarkMode}/></span>:<span className='pl-3'><BiMoon className="cursor-pointer" onClick={handleDarkMode}/></span>}
                </div>
            </div>
        </nav>
    )
}

export default NavbarNotAuth