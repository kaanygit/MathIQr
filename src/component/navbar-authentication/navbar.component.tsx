"use client"
import Link from "next/link"
import { BiBell,BiMath, BiMoon, BiSun } from "react-icons/bi"
import {FaRobot} from 'react-icons/fa'
import {PiExam} from 'react-icons/pi'
import {TbMessages} from 'react-icons/tb'
import {FiSettings} from 'react-icons/fi'
import { Avatar, Menu, MenuHandler, MenuItem, MenuList } from "@material-tailwind/react"
import {RxAvatar} from 'react-icons/rx'
import { signOut } from "next-auth/react"
import { useState } from "react"

const NavbarAuthentication:React.FC=()=>{
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
    return(
        <div className="w-full h-full mx-auto px-16 py-8 justify-center items-center text-center flex shadow sticky fixed top-0 z-40 overflow-hidden">
            <div className="flex w-full justify-center items-center text-2xl z-40">
                <div className="flex-1 flex text-2xl z-40">
                    <span className='text-2xl font-black justify-center items-center text-center flex'><BiMath/></span>
                    <Link href="/dashboard" className='pl-2 font-bold  justify-center items-center text-center flex'>MathIQr</Link>
                    <div className="flex justify-center items-center text-center pl-5 text-2xl">
                        <span className=" font-black"><FaRobot/></span>
                        <Link href="/dashboard/lesson/ai" className="pl-2">Lesson</Link>
                    </div>
                    <div className="flex justify-center items-center text-center pl-4 text-2xl">
                        <span className=" font-black"><PiExam/></span>
                        <Link href="/dashboard/lesson/ai" className="pl-3">Exam</Link>
                    </div>
                    <div className="flex justify-center items-center text-center pl-4 text-2xl">
                        <span className=" font-black"><TbMessages/></span>
                        <Link href="/dashboard/community" className="pl-3">Community</Link>
                    </div>
                </div>
                <div className="flex-1 flex justify-end items-center text-center text-2xl ">
                    <div className="flex justify-center items-center text-center pl-4  text-3xl">
                        <span className="font-black"><BiBell/></span>
                    </div>
                    <div className="flex justify-center items-center text-center pl-4  text-4xl">
                        <span className="font-black">
                        <Menu>
                            <MenuHandler>
                                <span className="font-black"><RxAvatar/></span>
                            </MenuHandler>
                            <MenuList>
                                <MenuItem onClick={()=>signOut()}>Sign Out</MenuItem>
                            </MenuList>
                        </Menu>
                        </span>
                    </div>
                    <div className="flex justify-center items-center text-center pl-4   text-2xl">
                        <Link href="/dashboard/settings" className="font-black"><FiSettings/></Link>
                    </div>
                    <div className="flex justify-center items-center text-center pl-4   text-2xl">
                        {currentDarkMode==="true"?<span className='pl-3'><BiSun className="cursor-pointer" onClick={handleDarkMode}/></span>:<span className='pl-3'><BiMoon className="cursor-pointer" onClick={handleDarkMode}/></span>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarAuthentication