"use client"
import { ReactNode } from "react"
import ExamAllOfThemPhoto from '../../../../assets/examallofthem.png'
import Image from "next/image"


interface ChildrenProps{
    children:ReactNode
}


export default function ExamPageLayout({children}:ChildrenProps){
    return(
        <>
            <section className="w-full h-full flex flex-col justify-center items-center p-24 mx-auto  overflow-y-auto">
                <div className='w-full h-full flex justify-center items-center p-3 border-b-8 border-gray-300 '>
                    <div className='flex justify-center items-center text-center '>
                        <Image src={ExamAllOfThemPhoto} width={300} alt='community-page-navbar-photo'/>
                    </div>
                    <div className='flex-1 flex-col justify-start pl-3 w-full pt-3'>
                        <span className='font-bold text-3xl flex justify-start '>Testler ve Sınavlar</span>
                        <span className='text-xl flex justify-start'>Sınavları çöz,Testleri çöz, soruları tekrar gözden geçir, yapamadığın soruları ekran görüntüsü al topluluk sayfamızda paylaş, gelişim kaydet! MathIQr ile başarıya adım atın.</span>
                    </div>
                </div>
                <div className="w-full h-full flex">
                    {children}
                </div>
            </section>
        </>
    )
}