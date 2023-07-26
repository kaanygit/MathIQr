import Image from "next/image"
import imge from '../../../assets/pi-symbol.svg'
import { Button } from "@mui/material"
import Teacher1 from '../../../assets/teacher-1.png'
import Class from '../../../assets/class.png'
import Tahta from '../../../assets/tahta.png'


const HomePages=()=>{
    return(
        <>
        <main className="w-full h-full items-center justify-center  bg-palette-3 mx-auto ">
            <div className="w-full h-screen p-20">
                <div className="w-full h-full grid grid-cols-2 gap-5 flex">
                    <div className="flex justify-center items-center ">
                        <Image src={imge} width={400} height={400} alt="home-page-icon" priority/>
                    </div>
                    <div className="w-full h-full justify-center items-center text-center">
                        <div className="w-full h-full justify-center items-center text-center flex grid grid-cols-1 p-10">
                            <span className="text-5xl text-palette-4 font-bold text-white">The free, fun and effective way to learn math!</span>
                            <div className="grid grid-cols-2 gap-2 justify-center  h-full flex w-full">
                                <div className="w-full">
                                    <Button className="bg-white text-black font-bold text-xl w-full py-5 rounded-xl hover:bg-gray-200">Get Started</Button>
                                </div>
                                <div className="w-full">
                                    <Button className="text-white bg-black w-full text-xl font-bold rounded-xl hover:bg-gray-800">I already have an account</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white h-screen w-full flex text-palette-4">
                <div className="p-20 w-full h-full items-center text-center justify-center">
                    <span className="text-5xl flex font-bold">Revolutionize Your Learning</span>
                    <div className="grid grid-cols-2 gap-5 w-full h-full mt-10">
                        <div className="grid grid-cols-1 text-center items-center justify-center flex py-8">
                            <div className=" w-full h-full justify-center items-center text-center">
                                <div className="flex font-bold text-2xl">Interactive Lessons</div>
                                <div className="flex">Dive into engaging, hands-on lessons that make math come alive.</div>
                            </div>
                            <div className=" w-full h-full">
                                <div className="flex font-bold text-2xl">Personalized Paths</div>
                                <div className="flex">Tailor-made learning journeys to guide you to success.</div>
                            </div>
                            <div className=" w-full h-full">
                                <div className="flex font-bold text-2xl">Expert Instructors</div>
                                <div className="flex">Learn from passionate educators with years of experience.</div>
                            </div>
                        </div>
                        <div className="w-full h-3/4 p-10 object-fill	 ">
                            <Image src={Teacher1} alt="teacher" className="object-fill h-full rounded-2xl"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-palette-2 h-full w-full flex">
                <div className="p-20  w-full h-full items-center text-center justify-center">
                    <div className="grid-cols-2 gap-5 w-full h-full items-center justify-center flex">
                        <div className="p-5">
                            <div><span className="text-4xl font-bold">Real-World Applications</span></div>
                            <div ><span className="flex justify-start w-full">Discover the power of math through real-world examples and practical applications.</span></div>
                        </div>
                        <div className="h-3/4 p-10">
                            <Image src={Tahta} alt="tahta" className="object-fill h-full rounded-2xl"/>
                        </div>
                    </div>
                    <div className="grid-cols-2 gap-5 w-full h-full items-center justify-center flex mt-10">
                        <div className="h-3/4 p-10">
                            <Image src={Class} alt="class" className="object-fill h-full rounded-2xl"/>
                        </div>
                        <div className="p-5">
                            <div><span className="text-4xl font-bold">Collaborative Environment</span></div>
                            <div><span>Connect with your peers and tackle challenging math problems together.</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-full w-full flex bg-palette-2 p-20">
                <div className="w-full h-full  justify-center items-center">
                    <div className="w-full h-full flex text-5xl font-bold">
                        <span>Join My Math App today, start your adventure in the world of math!</span>
                    </div>
                    <div className="text-center flex mt-5 justify-center">
                        <Button className="bg-white text-black font-bold text-xl py-5 pt-5 rounded-xl hover:bg-gray-200">Totally Free</Button>
                        <Button className="bg-black text-white font-bold text-xl py-5 ml-5 rounded-xl  hover:bg-gray-800">And More Information</Button>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}

export default HomePages