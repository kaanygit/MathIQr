"use client"
import { useSession } from "next-auth/react"
import { useEffect } from "react";

export interface SessionDataInterface {
    classing?:string|null;
    email?:string|null;
    id?:string|null;
    name?:string|null;
    role?:string|null;
    username?:string|null;
}
interface ParamsProps{
    params:string;
}

const ProfilePage:React.FC<ParamsProps>=({params})=>{
    const {data:session,status}=useSession();
    const datas: SessionDataInterface[] | null = session?.user ? [session.user] : null;

    useEffect(()=>{
        console.log(params);
    },[params])
    return(
        <div className="w-full h-screen justify-center items-center text-center text-3xl">
            {datas ? (
                datas.map((userKey: SessionDataInterface, index: number) => (
                    <div key={index}>
                        <div>{userKey.email}</div>
                        <div>{userKey.username}</div>
                        <div>{userKey.classing}.Sınıf</div>
                    </div>
                ))
            ) : (
                null
            )}
        </div>
    )
}

export default ProfilePage;