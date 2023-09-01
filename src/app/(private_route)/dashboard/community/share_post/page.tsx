"use client"
import { Option, Select, Textarea } from "@material-tailwind/react"
import { MdOutlineAddPhotoAlternate } from "react-icons/md"

import SCHOLLCLASS from '../../../../../json/scholl-grades.json'
import SUBJECTLIST from '../../../../../json/subject-list.json'
import { redirect } from 'next/navigation'
import { useRouter } from "next/navigation"



const SharePostCommunity:React.FC=()=>{
    const router=useRouter();
    const schoolGrades:string[] = SCHOLLCLASS   
    const subjectList:string[]=SUBJECTLIST


    const sharePostForm=(e:React.ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try {
            router.push('/dashboard/community/my_problems')
        } catch (error) {
            console.log('Error : ',error)
        }
    }
    return(
        <main className="mx-auto w-full h-full flex flex-col justify-center items-center  py-6 px-3 shadow-md rounded-2xl" style={{width:"1000px"}}>
            <span className="justify-center w-full items-center text-center text-3xl font-bold text-blue-500 ">Share Your Problems</span>
            <form onSubmit={sharePostForm} className='flex flex-col border-4 rounded-xl w-full p-5 m-5 h-full'>
                <label className='mr-5 w-full'>
                    <Select color='blue' className="w-full" label="Select Class" aria-required>
                        {schoolGrades.map((schollClass:string,index:number):React.ReactNode=>{
                            return <Option key={index} value={schollClass}>{schollClass}</Option>
                        })}
                    </Select>
                </label>
                <label className='mr-5 my-5 w-full'>
                    <Select color='blue'  className="w-full" label="Select Subject" aria-required>
                        {subjectList.map((subject:string,index:number):React.ReactNode=>{
                            return <Option key={index} value={subject}>{subject}</Option>
                        })}
                    </Select>
                </label>
                <div className='flex flex-row w-full'>
                    <span className='flex flex-1 justify-center items-center text-4xl cursor-pointer border-4 mr-2 flex-col'><MdOutlineAddPhotoAlternate/><span className="text-xl justify-center items-center text-center">Add Photo is Problem</span></span>
                    <div className='flex-1 flex'>
                        <Textarea size="lg" label="Problem" rows={12} cols={40} required/>
                    </div>
                </div>
                <button type="submit" className="py-3 px-16 bg-blue-500 rounded-2xl text-white font-medium my-5 hover:bg-blue-700 transition duration-300 ease-in-out" >Gönder</button>
            </form>
        </main>
    )
}

export default SharePostCommunity