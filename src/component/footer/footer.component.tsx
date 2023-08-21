import Link from 'next/link'
import {AiFillGithub} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {SiWebflow} from 'react-icons/si'


const FooterComponent:React.FC=()=>{
    return(
        <footer className="w-full h-full mx-auto bg-gray-900 text-gray-200 p-24 justify-center items-center text-center flex flex-row ">
            <div className="flex flex-row flex-1 justify-between items-center text-center text-xl">
                <div className="flex flex-col justify-center items-center text-center">
                    <span>Link 1</span>     
                    <span>Link 2</span>     
                    <span>Link 3</span>     
                    <span>Link 4</span>     
                </div> 
                <div className="flex flex-col">
                    <span>Link 1</span>     
                    <span>Link 2</span>     
                    <span>Link 3</span>     
                    <span>Link 4</span>   
                </div> 
                <div className="flex flex-col">
                    <span>Link 1</span>     
                    <span>Link 2</span>     
                    <span>Link 3</span>     
                    <span>Link 4</span>   
                </div> 
            </div>
            <div className="flex flex-1 justify-end pr-16 text-5xl">
                <Link href="https://github.com/kaanygit" className='text-white'><AiFillGithub/></Link>
                <Link href="https://twitter.com/kaanygit" className="pl-5 text-twitter-color"><BsTwitter/></Link>
                <Link href="https://kaanygit.online" className="pl-5 text-blue-500"><SiWebflow/></Link>
            </div>
        </footer>
    )
}

export default FooterComponent