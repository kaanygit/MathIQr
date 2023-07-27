"use client"

const Loading=()=>{
    return(
        <>
            <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 h-screen w-full justify-center items-center text-center flex">
                <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-64 w-64"></div>
            </div>
        </>
    )
}

export default Loading