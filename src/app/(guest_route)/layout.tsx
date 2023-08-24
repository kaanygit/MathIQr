import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

interface Props{
    children:React.ReactNode
}

export default async function PrivateLayout({children}:Props){
    const session=await  getServerSession(authOptions);

    if(session) redirect("/dashboard");

    return <>{children}</>
}