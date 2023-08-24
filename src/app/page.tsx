"use client"
import Image from 'next/image'
import MathCharacter from '../assets/math-home-character.png'
import TeachersBoard from '../assets/teachers.png'
import EinstainBoard from '../assets/einstain-board.png'
import MathTeachers from '../assets/math-teachers.png'
import Link from 'next/link'
import {Transition} from '@headlessui/react'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { LoadingComponent } from '@/component/component.export'

export default  function Home() {
  const [showPageTransition,setShowPageTransition]=useState<boolean>(false);
  const {data:session,status}=useSession();


  useEffect(()=>{
    setShowPageTransition(true)
  },[])


  return (
    status==="unauthenticated"?(
    <Transition show={showPageTransition} enter='transition-opacity duration-500' enterFrom='opacity-0' enterTo='opacity-100'>
    <main className="flex flex-col w-full h-full  items-center justify-center px-24 ">
      <div className='w-full flex justify-center items-center pt-24 pb-36'>
        <div className='flex-1 justify-center items-center text-center flex-col flex'>
          <span className='text-5xl'>
            Hi👋 Welcome to math learning app
          </span>
          <span className='pt-5 text-3xl'>
            Sign up for the app now and start learning math 👇
          </span>
          <Link href="/authentication" className='mt-10  text-white text-center rounded-xl py-3 px-10 bg-blue-500'>
            Sign Up
          </Link>
        </div>
        <div className='flex-1  justify-center items-center text-center flex'>
          <Image src={MathCharacter} width={500}   alt='Math-Home-Page-Character'/>
        </div>
      </div>

      <div className='w-full h-full flex flex-col'>
        <span className='text-5xl flex font-bold'>Revolutionize Your Learning</span>
        <div className='w-full h-full flex justify-center items-center mt-12'>
          <div className='flex-1 h-full flex-col flex text-3xl'>
            <div className='flex flex-col'>
              <span className='font-bold'>Interactive Lessons</span>
              <span className='text-xl'>Dive into engaging, hands-on lessons that make math come alive.</span>
            </div>
            <div className='flex flex-col mt-16'>
              <span className='font-bold'>Personalized Paths</span>
              <span className='text-xl'>Tailor-made learning journeys to guide you to success.</span>
            </div>
            <div className='flex flex-col mt-16'>
              <span className='font-bold'>Expert Instructors</span>
              <span className='text-xl'>Learn from passionate educators with years of experience.</span>
            </div>
          </div>
          <div className='flex-1 justify-center items-center text-center flex'>
            <Image src={EinstainBoard} width={800} alt='teacher-home-page.png'/>
          </div>
        </div>
      </div>

      <div className='w-full h-full flex flex-col mt-24'>
        <div className='flex w-full h-full'>
          <div className='flex-1  flex text-center items-center justify-center'>
            <div className='flex flex-col'>
              <span className='text-3xl font-bold'>Real-World Applications</span>
              <span className='text-xl pt-5'>Discover the power of math through real-world examples and practical applications.</span>
            </div>
          </div>
          <div className='flex-1 justify-center items-center flex'>
           <Image src={TeachersBoard} width={900} alt='home-screen1.png'/>
          </div>
        </div>
        <div className='flex w-full h-full mt-10'>
          <div className='flex-1 justify-center items-center flex'>
            <Image src={MathTeachers} width={600} alt='home-screen1.png'/>
          </div>
          <div className='flex-1  flex text-center items-center justify-center'>
            <div className='flex flex-col'>
              <span className='text-3xl font-bold'>Collaborative Environment</span>
              <span className='text-xl pt-5'>Connect with your peers and tackle challenging math problems together.</span>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-full flex flex-col mt-24'>
        <div className="w-full h-full flex text-5xl font-bold px-8">
            <span>Join My Math App today, start your adventure in the world of math!</span>
        </div>
        <div className="text-center flex mt-5 justify-center pt-5 pb-10">
            <button className="bg-gray-300 text-black font-bold text-xl py-5 pt-5 px-5 rounded-xl hover:bg-gray-200">Totally Free</button>
            <button className="bg-black text-white font-bold text-xl py-5 ml-5 px-5 rounded-xl  hover:bg-gray-800">And More Information</button>
        </div>
      </div>
    </main>
    </Transition>):status==="loading"?(<LoadingComponent/>):(redirect("/dashboard"))
  )
}
