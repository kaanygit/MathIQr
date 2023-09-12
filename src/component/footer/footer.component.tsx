import Link from 'next/link'
import { Fragment } from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {SiWebflow} from 'react-icons/si'


const FooterComponent:React.FC=()=>{
    return(
        <footer className="w-full h-full mx-auto bg-gray-900 text-gray-200 px-24 py-8 justify-center items-center text-center flex flex-row ">
            <div className='flex flex-1 justify-center items-center text-xl'>
                <span>MathIQr - Developed by Yasin Kaan Yigit © 2023</span>
            </div>
            <div className="flex  flex-1 justify-center  text-5xl">
                <Link href="https://github.com/kaanygit" className='text-white'><AiFillGithub/></Link>
                <Link href="https://twitter.com/kaanygit" className="pl-5 text-twitter-color"><BsTwitter/></Link>
                <Link href="https://kaanygit.online" className="pl-5 text-blue-500"><SiWebflow/></Link>
            </div>
        </footer>
    )
}

export default FooterComponent