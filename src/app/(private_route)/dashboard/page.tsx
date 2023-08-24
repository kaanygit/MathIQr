"use client"
import {Transition} from '@headlessui/react'
import { useEffect, useState } from 'react';
import StudyingStudent from '../../../assets/studyingstudent.png'
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { SessionDataInterface } from './profile/page';
import Teacher from '../../../assets/teachers.png'
import AiTeacher from '../../../assets/aiteacher.png'
import QuizSolution from '../../../assets/quizsolution.png'
import NewLesson from '../../../assets/newlessonicon.png'
import Link from 'next/link';

const Dashboard:React.FC=()=>{
    const [showPageTransition,setShowPageTransition]=useState<boolean>(false);
    const {data:session,status}=useSession();
    const user: SessionDataInterface[] | null = session?.user ? [session.user] : null;

    useEffect(()=>{
        setShowPageTransition(true)
    },[])
    return(
        <>
            <Transition show={showPageTransition} enter='transition-opacity duration-500' enterFrom='opacity-0' enterTo='opacity-100'>
                <main className='mx-auto w-full h-full justify-center items-center text-center flex flex-col '>
                    <div className=' w-full h-full flex flex-row'>
                        <div className='flex-1 flex justify-center items-center text-center font-semibold pl-24 text-4xl'>
                            Hey {user?user[0].name:null}, Welcome, you can continue with the content of learning mathematics again. Remember math isn't terrible 😉
                        </div>
                        <div className='flex-1 flex justify-center relative'>
                            <Image src={StudyingStudent} width={500}  alt='StudyStudent' className="animating-image"/>
                        </div>
                    </div>
                    <div className='py-24 px-36 bg-gray-200 w-full h-full flex flex-col '>
                        <div className='flex grid grid-cols-3 gap-9 text-2xl'>
                            <Link href="/dashboard/lesson/teacher" className='flex flex-row justify-center items-center text-center w-full h-full px-10'>
                                <div className='flex flex-col p-8'>
                                    <span className='flex justify-center items-center text-center font-semibold'>Konu Çalış</span>
                                    <span className='text-xl'>Size özel hazırlanmış olduğumuz notları çalış</span>
                                </div>
                                <Image className='flex justify-center items-center text-center' src={Teacher} width={300} alt='teacher-dashboard'/>
                            </Link>
                            <Link href="/dashboard/quiz" className='flex flex-row justify-center items-center text-center w-full h-full px-10'>
                                <div className='flex flex-col p-8'>
                                    <span className='flex justify-center items-center text-center font-semibold'>Soru Çöz</span>
                                    <span className='text-xl'>Seviyenize uygun testler çözün ve kendinizi geliştirin</span>
                                </div>
                                <Image className='flex justify-center items-center text-center' src={QuizSolution} width={300} alt='teacher-dashboard'/>
                            </Link>
                            <Link href="/dashboard/lesson/ai" className='flex flex-row justify-center items-center text-center w-full h-full px-10'>
                                <div className='flex flex-col p-8'>
                                    <span className='flex justify-center items-center text-center font-semibold'>Yapay Zeka ile Konu Anlatımı</span>
                                    <span className='text-xl'>Yapay zeka yardımıyla daha iyi öğrenin</span>
                                </div>
                                <Image className='flex justify-center items-center text-center' src={AiTeacher} width={300} alt='teacher-dashboard'/>
                                <div className='absolute'>
                                    <Image src={NewLesson} width={75} alt='new-lesson-icon' className='relative bottom-24 left-48 '/>
                                </div>
                            </Link>
                        </div>
                        <div className='bg-gray-300 mt-24'>
                            konu öğrenme listeleri
                        </div>
                        <div className='bg-gray-300 mt-24'>
                            quiz listeleri
                        </div>
                    </div>
                </main>
            </Transition>
        </>
    )
}

export default Dashboard