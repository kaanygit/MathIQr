"use client"
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import axios from "axios";
import { getSession } from "next-auth/react";



const AdminRoutePage:React.FC=async()=>{
    const url:string='/api/auth/session'

    const datas=await getSession();
    console.log(datas);
    return(
        <section>
            Admin Rotası
        </section>
    )
}

export default AdminRoutePage