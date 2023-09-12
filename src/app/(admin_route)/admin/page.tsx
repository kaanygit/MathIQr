"use client"
import { getSession } from "next-auth/react";



const AdminRoutePage:React.FC=async()=>{
    const url:string='/api/auth/session'

    const datas=await getSession();
    console.log(datas);
    return(
        <section className="mx-auto w-full h-screen text-3xl font-bold text-blue-400 flex flex-col justify-center items-center  pb-10 " style={{width:"1000px"}}>
            Admin Rotası
        </section>
    )
}

export default AdminRoutePage