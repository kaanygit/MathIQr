import { LoadingComponent } from "@/component/component.export";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { ReactNode, Suspense } from "react";

interface Props{
    children:ReactNode
}

export default function AdminLayout({children}:Props){
    const {data:session,status}=useSession();
    const admin=session?.user;

    if(admin?.role==="admin")return <Suspense fallback={<LoadingComponent/>}>{children}</Suspense>

    redirect("/dashboard");
}