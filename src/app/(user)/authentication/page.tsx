"use client"
import { useState } from "react";
import Link from "next/link"
import Image from "next/image"
import {BiMath} from 'react-icons/bi'
import EinstainBoard from '../../../assets/einstain-board.png'
import { Select, Option } from "@material-tailwind/react";


interface loginInterface{
    emailIn:string;
    passwordIn:string;
}
interface signupInterface{
    name:string;
    classF:string;
    username:string;
    emailUp:string;
    passwordUp:string;
    confirmPassword:string;
}

const initialStateLogin:loginInterface={
    emailIn:"",
    passwordIn:""
}
const initialStateSignUp:signupInterface={
    name:"",
    classF:"",
    username:"",
    emailUp:"",
    passwordUp:"",
    confirmPassword:"",
}


const AuthenticationPage:React.FC=()=>{
    const [formSwitch,setFormSwitch]=useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [loginForm,setLoginForm]=useState<loginInterface>(initialStateLogin);
    const [signUpForm,setSignUpForm]=useState<signupInterface>(initialStateSignUp);

    const {emailIn,passwordIn}=loginForm
    const {name,classF,username,emailUp,passwordUp,confirmPassword}=signUpForm
    const handleSignInReset=()=>{setLoginForm(initialStateLogin)};
    const handleSignUpReset=()=>{setSignUpForm(initialStateSignUp)};

    const handleFormSwitch=()=>{
        setFormSwitch(!formSwitch);
    }

    const handleChanceIn=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target;
        setLoginForm({...loginForm,[name]:value});
    };

    const handleChanceUp=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target;
        setSignUpForm({...signUpForm,[name]:value});
    };
    const handleSelectChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        const newSelectedOption = e.target.value;
        setSelectedOption(newSelectedOption);
        setSignUpForm((prevForm) => ({
            ...prevForm,
            classF: newSelectedOption,
          }));
      };

    const handleSignInFormSubmit=(e:React.ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log(loginForm);
        handleSignInReset();
    }
    const handleSignUpFormSubmit=(e:React.ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(passwordUp!==confirmPassword){
            console.log("şifreler eş değil")
            return
        };
        console.log(signUpForm);
        handleSignUpReset();
    }




    return(
        <main className="w-full h-full p-24 flex justify-center items-center text-center mx-auto ">
            <div className="flex-1 bg-gray-200 h-full w-full rounded-2xl py-20 px-5">
                <div className="flex text-4xl font-bold">
                    <span><BiMath/></span>
                    <span className="pl-5">MathIQr</span>
                </div>
                <div className="flex justify-start pt-5 text-3xl font-medium">
                    <span>Welcome back</span>
                </div>
                <div className="flex justify-start pt-5 text-gray-500">
                    {!formSwitch?
                        <>
                            <span>Start your Math learning in seconds. Do you have an account?</span>
                            <button className="text-blue-500 pl-3" onClick={handleFormSwitch}>Sign In</button>
                        </>
                        :
                        <>
                            <span>Start your Math learning in seconds. Don’t have an account?</span>
                            <button className="text-blue-500 pl-3" onClick={handleFormSwitch}>Sign up</button>
                        </>
                    }
                </div>
                {formSwitch?(
                    <form onSubmit={handleSignInFormSubmit} className="flex flex-col  pt-5">
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-col">
                                <label className="flex justify-start">Email</label> 
                                <input type="email" name="emailIn" onChange={handleChanceIn} value={emailIn} className="rounded-xl mt-2 py-2 px-8" placeholder="name@company.com" required/>
                            </div>
                            <div className="flex flex-col">
                                <label className="flex justify-start">Password</label> 
                                <input type="password" name="passwordIn" onChange={handleChanceIn} value={passwordIn} className="rounded-xl mt-2 px-8 py-2" placeholder="....." required/>
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
                ):(
                    <form onSubmit={handleSignUpFormSubmit} className="flex flex-col pt-5">
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-col">
                                <label className="flex justify-start">Name</label> 
                                <input type="text" name="name" onChange={handleChanceUp} value={name} className="rounded-xl mt-2 py-2 px-8" placeholder="Name" required/>
                            </div>
                            <div className="flex flex-col">
                                <label className="flex justify-start">Class</label> 
                                <select name="classF" value={selectedOption} required onChange={handleSelectChange} className="rounded-xl mt-2 px-20 py-2 ">
                                    <option value="beginner">İlkOkul</option>
                                    <option value="intermediate">OrtaOkul</option>
                                    <option value="advanced">Lise</option>
                                    {/* <option value="advanced" disabled>Universite (Cok Yakinda!)</option> */}
                                </select>

                            </div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-col">
                                <label className="flex justify-start">Username</label> 
                                <input type="text" name="username" onChange={handleChanceUp} value={username} className="rounded-xl mt-2 py-2 px-8" placeholder="Username" required/>
                            </div>
                            <div className="flex flex-col">
                                <label className="flex justify-start">Email</label> 
                                <input type="email" name="emailUp" onChange={handleChanceUp} value={emailUp} className="rounded-xl mt-2 px-8 py-2" placeholder="name@company.com" required/>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-col">
                                <label className="flex justify-start">Password</label> 
                                <input type="password" name="passwordUp" onChange={handleChanceUp} value={passwordUp} className="rounded-xl mt-2 py-2 px-8" placeholder="....." required/>
                            </div>
                            <div className="flex flex-col">
                                <label className="flex justify-start">Confirm Password</label> 
                                <input type="password" name="confirmPassword" onChange={handleChanceUp} value={confirmPassword} className="rounded-xl mt-2 px-8 py-2" placeholder="....." required/>
                            </div>
                        </div>
                        <button type="submit" className="w-full mt-5 bg-blue-500 text-white font-bold hover:bg-blue-700 py-2 rounded-xl">Sign Up</button>
                    </form>
                )}
            </div>
            <div>
                <Image src={EinstainBoard} width={800} alt="auth-image"/>
            </div>
        </main>
    )
}

export default AuthenticationPage