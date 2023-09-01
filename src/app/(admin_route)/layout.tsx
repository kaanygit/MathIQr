import { getServerSession } from "next-auth"
import { ReactNode, Suspense } from "react"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation";
import { LoadingComponent } from "@/component/component.export";
import axios from 'axios';
import { getSession } from "next-auth/react";


export interface ChildrenProps{
    children:ReactNode
}

export default async function AdminRoute({children}:ChildrenProps){
    const session=await getServerSession(authOptions);
    const roleControl=session?.user;
    const role=roleControl?.role;

    if(session){
        if(roleControl&&roleControl.role==='user')redirect('/dashboard');
        return <Suspense fallback={<LoadingComponent/>}>{children}</Suspense>
    }else{
        redirect('/');
    }

}