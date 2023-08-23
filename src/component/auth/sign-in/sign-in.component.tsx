import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";


interface loginInterface{
    email:string;
    password:string;
}
const initialStateLogin:loginInterface={
    email:"",
    password:""
}

const SignInComponent:React.FC=()=>{
    const [loginForm,setLoginForm]=useState<loginInterface>(initialStateLogin);
    const router=useRouter();

    const {email,password}=loginForm;
    const handleSignInReset=()=>{setLoginForm(initialStateLogin)};
    const handleChanceIn=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target;
        setLoginForm({...loginForm,[name]:value});
    };

    const handleSignInFormSubmit=async(e:React.ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log(loginForm);
        const res=await signIn("credentials",{
            email,password
        });
        if(res?.error){
            return console.log(res.error);
        }
        router.replace("dashboard");
        handleSignInReset();
    }
    return(
        <>
        <form onSubmit={handleSignInFormSubmit} className="flex flex-col  pt-5">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                    <label className="flex justify-start">Email</label> 
                    <input type="email" name="email" onChange={handleChanceIn} value={email} className="rounded-xl mt-2 py-2 px-8" placeholder="name@company.com" required/>
                </div>
                <div className="flex flex-col">
                    <label className="flex justify-start">Password</label> 
                    <input type="password" name="password" onChange={handleChanceIn} value={password} className="rounded-xl mt-2 px-8 py-2" placeholder="....." required/>
                </div>
            </div>
            <div className="flex flex-row pt-5 justify-between">
                <div>
                    <input type="checkbox"/>
                    <span className="pl-3">Remember Me</span>
                </div>
                <div>
                    <Link href="/forgotpassword" className="text-blue-500">Forgot Password</Link>
                </div>
            </div>
            <button type="submit" className="w-full mt-5 bg-blue-500 text-white font-bold hover:bg-blue-700 py-2 rounded-xl">Sign In</button>
        </form>
        </>
    )
}

export default SignInComponent