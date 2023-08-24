import Link from "next/link"




const NotFoundComponent:React.FC=()=>{
    return (
        <div className='w-full h-screen text-5xl justify-center items-center text-center p-24'>
          <h2 className='font-bold'>Not Found ! 😞</h2>
          <p className='mt-5'>Could not find requested resource</p>
          <Link href="/" className='mt-5'>Return Home  👈</Link>
        </div>
      )
}

export default NotFoundComponent