import Link from 'next/link'
import {BiMath,BiMoon} from 'react-icons/bi'


const NavbarComponent:React.FC=()=>{
    return(
        <nav className="w-full h-full mx-auto px-24 py-10 justify-center items-center text-center flex">
            <div className="flex w-full justify-center items-center text-2xl">
                <div className="flex-1 flex text-4xl">
                    <span className='text-4xl font-black'><BiMath/></span>
                    <Link href="/" className='pl-3 font-bold'>MathIQr</Link>
                </div>
                <div className="flex-1 flex justify-end text-center items-center font-medium">
                    <Link href='/authentication'>Login / Sign Up</Link>
                    <Link href='/about' className='pl-5'>About</Link>
                    <Link href='/contact' className='pl-3'>Contact</Link>
                    <span className='pl-3 '><BiMoon/></span>
                </div>
            </div>
        </nav>
    )
}

export default NavbarComponent