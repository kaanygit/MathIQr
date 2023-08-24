import { useState } from "react";
import { POST } from "@/app/api/auth/users/route";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";



interface signupInterface{
    name:string;
    classing:string;
    username:string;
    email:string;
    password:string;
    confirmPassword:string;
}
const initialStateSignUp:signupInterface={
    name:"",
    classing:"",
    username:"",
    email:"",
    password:"",
    confirmPassword:"",
}

const SignUpComponent:React.FC=()=>{
    const router=useRouter();
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [signUpForm,setSignUpForm]=useState<signupInterface>(initialStateSignUp);

    const {name,classing,username,email,password,confirmPassword}=signUpForm
    const handleSignUpReset=()=>{setSignUpForm(initialStateSignUp)};

    const handleChanceUp=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target;
        setSignUpForm({...signUpForm,[name]:value});
    };
    const handleSelectChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        const newSelectedOption = e.target.value;
        setSelectedOption(newSelectedOption);
        setSignUpForm((prevForm) => ({
            ...prevForm,
            classing: newSelectedOption,
          }));
      };


    const handleSignUpFormSubmit=async(e:React.ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(password!==confirmPassword){
            console.log("şifreler eş değil")
            return
        }else{
            try {
                console.log(signUpForm);
                const res=await fetch("/api/auth/users",{
                    method:"POST",
                    body:JSON.stringify(signUpForm),
                })
                if(res.status==423){
                    console.log("Username in already in use");
                }else if(res.status==422){
                    console.log("Email in already in use");
                }else{
                    const data=await res.json();
                    console.log(data);
                    const response=await signIn("credentials",{
                        email,password
                    });
                    if(response?.error){
                        return console.log(response.error);
                    }
                    router.replace("dashboard");
                }
                handleSignUpReset();
            } catch (error) {
                console.log(error);
            }
        }
    }

    return(
        <>
        <form onSubmit={handleSignUpFormSubmit} className="flex flex-col pt-5">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                    <label className="flex justify-start">Name</label> 
                    <input type="text" name="name" onChange={handleChanceUp} value={name} className="rounded-xl mt-2 py-2 px-8" placeholder="Name" required/>
                </div>
                <div className="flex flex-col">
                    <label className="flex justify-start">Class</label> 
                    <select name="classing" value={selectedOption} required onChange={handleSelectChange} className="rounded-xl mt-2 px-20 py-2 ">
                        <option value="1">1.Sınıf</option>
                        <option value="2">2.Sınıf</option>
                        <option value="3">3.Sınıf</option>
                        <option value="4">4.Sınıf</option>
                        <option value="5">5.Sınıf</option>
                        <option value="6">6.Sınıf</option>
                        <option value="7">7.Sınıf</option>
                        <option value="8">8.Sınıf</option>
                        <option value="9">9.Sınıf</option>
                        <option value="10">10.Sınıf</option>
                        <option value="11">11.Sınıf</option>
                        <option value="12">12.Sınıf</option>
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
                    <input type="email" name="email" onChange={handleChanceUp} value={email} className="rounded-xl mt-2 px-8 py-2" placeholder="name@company.com" required/>
                </div>
            </div>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                    <label className="flex justify-start">Password</label> 
                    <input type="password" name="password" onChange={handleChanceUp} value={password} className="rounded-xl mt-2 py-2 px-8" placeholder="....." required/>
                </div>
                <div className="flex flex-col">
                    <label className="flex justify-start">Confirm Password</label> 
                    <input type="password" name="confirmPassword" onChange={handleChanceUp} value={confirmPassword} className="rounded-xl mt-2 px-8 py-2" placeholder="....." required/>
                </div>
            </div>
            <button type="submit" className="w-full mt-5 bg-blue-500 text-white font-bold hover:bg-blue-700 py-2 rounded-xl">Sign Up</button>
        </form>
        </>
    )
}

export default SignUpComponent;