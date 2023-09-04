"use client"
import { ReactNode } from "react"
import Image from 'next/image'
import CommunityPhoto from '../../../../assets/community-page-photo.png'
import { Option, Select } from '@material-tailwind/react'
import { ImSearch } from 'react-icons/im'
import Link from 'next/link'

import SCHOLLCLASS from '../../../../json/scholl-grades.json'
import SUBJECTLIST from '../../../../json/subject-list.json'

interface ChildrenProps{
    children:ReactNode
}


export default function CommunityPageLayout({children}:ChildrenProps){

    const schoolGrades:string[] = SCHOLLCLASS[0]
    const subjectList:string[]=SUBJECTLIST

    const handleSearchForm=(e:React.ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault();
    }
    return(
        <section className="w-full h-full flex flex-col justify-center items-center p-24 mx-auto  ">
            <div className='w-full h-full flex justify-center items-center p-3 border-b-8 border-gray-300'>
                <div className='flex justify-center items-center text-center '>
                    <Image src={CommunityPhoto} width={300} alt='community-page-navbar-photo'/>
                </div>
                <div className='flex-1 flex-col justify-start pl-3 w-full pt-3'>
                    <span className='font-bold text-3xl flex justify-start '>Community</span>
                    <span className='text-xl flex justify-start'>Connect with other students and exchange feedback.An online community that solves the math problems they can't figure out.</span>
                </div>
            </div>
            <div className='w-full h-full flex flex-row justify-center items-center  p-3 bg-gray-100'>
                <div className='flex-1 flex justify-start items-center text-center '>
                    <Link href='/dashboard/community/discover' className='hover:text-blue-500 hover:border-b hover:border-blue-500 hover:border-b-4 transition duration-500 ease-in-out'>Discover</Link>
                    <Link href='/dashboard/community/friends' className='ml-3 hover:text-blue-500 hover:border-b border-blue-500 hover:border-b-4 transition duration-500 ease-in-out'>Friends</Link>
                    <Link href='/dashboard/community/share_post' className='ml-3 hover:text-blue-500 hover:border-b border-blue-500  hover:border-b-4 transition duration-500 ease-in-out'>Share</Link>
                    <Link href='/dashboard/community/my_problems' className='ml-3 hover:text-blue-500 hover:border-b border-blue-500  hover:border-b-4 transition duration-500 ease-in-out'>My Problems</Link>
                </div>
                <div className='flex-1 flex justify-end items-center text-center '>
                    <form className='flex flex-row items-center text-center' onSubmit={handleSearchForm}>
                        <label className='mr-5'>
                            <select color='blue'>
                                {schoolGrades.map((schollClass:string,index:number):any=>{
                                    return <option key={index} value={schollClass}>{schollClass}</option>
                                })}
                            </select>
                        </label>
                        <label className='mr-5'>
                            <select color='blue' >
                                {subjectList.map((subject:string,index:number):any=>{
                                    return <option key={index} value={subject}>{subject}</option>
                                })}
                            </select>
                        </label>
                        <button type='submit'className='text-xl' ><ImSearch/></button>
                    </form>
                </div>
            </div>
            <div>
                {children}
            </div>
        </section>
    )
}