import { getServerSession } from "next-auth";
import { ReactNode, Suspense } from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation"
import { LoadingComponent } from "@/component/component.export";




interface Props{
    children:ReactNode
}

export default async function PrivateLayout({children}:Props){
    const session=await  getServerSession(authOptions);

    if(!session?.user) redirect("/");

    return <Suspense fallback={<LoadingComponent/>}>{children}</Suspense>
}