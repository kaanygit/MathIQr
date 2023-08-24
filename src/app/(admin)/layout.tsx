
import { LoadingComponent } from "@/component/component.export";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { ReactNode, Suspense } from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";

interface Props{
    children:ReactNode
}



export default async function AdminLayout({children}:Props){

    const session= await getServerSession(authOptions);
    const user=session?.user as {role:string} |undefined;
    const isAdmin=user?.role ==="admin";


    if (!isAdmin)redirect("/dashboard");

    return <Suspense fallback={<LoadingComponent />}>{children}</Suspense>;
}