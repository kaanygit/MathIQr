import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export interface ChildrenPropss{
    children:ReactNode
}

export default async function AdminRoute({children}:ChildrenPropss){
    const session=await getServerSession(authOptions);
    const roleControl=session?.user;
    const role=roleControl?.role;

    if(session){
        if(roleControl&&roleControl.role==='user')redirect('/dashboard');
        return {children}
    }else{
        redirect('/');
    }

}