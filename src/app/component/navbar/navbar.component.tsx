import Image from "next/image"
import Link from "next/link"



const Navbar=()=>{
    return(
        <>
            <nav className="w-full  mx-auto justify-center items-center text-center flex bg-palette-3 px-16 py-8 fixed z-50">
                <div className="w-full h-full flex">
                    <div className="w-full h-full grid grid-cols-2 text-2xl font-bold tracking-widest">
                        <div>
                            <span>MathIQr</span>   
                        </div>
                        <div>
                            <Link href='/about'>About</Link>
                            <Link href='/contact' className="pl-5">Contact</Link>
                            <Link href='/authentication' className="pl-5">Login</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar