import Link from "next/link"
import {AiFillGithub} from 'react-icons/ai';
import {FiTwitter,FiInstagram} from 'react-icons/fi';


const Footer=()=>{
    return(
        <>
            <footer className="p-20 flex justify-center items-center text-center w-full h-full text-2xl">
                    <div className="w-full h-full ">
                        <div className="grid grid-cols-3  w-full h-full">
                            <div className="w-full h-full">
                                <Link href='/features'>Features</Link>
                                <div className="w-full h-full flex flex-col">
                                    <Link href='/features'>Lessons</Link>
                                    <Link href='/features'>Pricing</Link>
                                    <Link href='/features'>Dm</Link>
                                </div>
                            </div>
                            <div className="w-full h-full">
                                <Link href='/features'>About</Link>
                                <div className="flex flex-col">
                                    <Link href='/features'>Contact</Link>
                                    <Link href='/features'>FAQ</Link>
                                    <Link href='/features'>Support</Link>
                                </div>
                            </div>
                            <div className="w-full h-full">
                                <span>Social</span>
                                <div className="w-full h-full flex-col justify-center items-center text-center">
                                    <Link href='https://github.com/kaanygit'><span className="justify-center text-center items-center w-full flex"><AiFillGithub/></span></Link>
                                    <Link href='https://twitter.com/kaanygit1'><span className="justify-center text-center items-center w-full flex text-blue-500 pt-1"><FiTwitter/></span></Link>
                                    <Link href='https://www.instagram.com/kaanygit/'><span className="justify-center text-center items-center w-full flex text-instagram-color pt-1"><FiInstagram/></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-full text-sm pt-8">
                            <span>MathIQr 2023 © Kaanygit. All rights reserved.</span>
                        </div>
                    </div>
            </footer>
        </>
    )
}

export default Footer