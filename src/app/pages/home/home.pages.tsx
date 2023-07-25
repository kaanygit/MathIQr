import Image from "next/image"
import imge from '../../assets/pi-symbol.svg'
import { Button } from "@mui/material"




const HomePages=()=>{
    return(
        <>
            <div>
                <div className="w-full h-full grid grid-cols-2 gap-5">
                    <div className="flex justify-center items-center ">
                        <Image src={imge} width={400} height={400} alt="home-page-icon"/>
                    </div>
                    <div className="w-full h-full justify-center items-center text-center">
                        <div className="w-full h-full justify-center items-center text-center flex grid grid-cols-1">
                            <span className="text-5xl text-palette-4 font-bold">The free, fun and effective way to learn math!</span>
                            <div className="grid grid-cols-2 gap-2 justify-center items-center h-full flex">
                                <div>
                                    <Button className="bg-palette-3 text-white w-1/2">Get Started</Button>
                                </div>
                                <div>
                                    <Button className="text-white bg-palette-4 w-1/2">I already have an account</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePages