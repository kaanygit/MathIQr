"use client"
import React from 'react'
import tahtaG from '../../../assets/math_home.png'
import Image from 'next/image';
import { Input } from '@mui/material';

interface initialStateTS{
    name:string;
    surname:string;
    email:string;
    userClass:number;
    password:string;
    confirmPassword:string;
}

const initialState:initialStateTS={
    name:'',
    surname:'',
    email:'',
    userClass:1,
    password:'',
    confirmPassword:'',
}

const AuthenticationPage:React.FC=()=>{
    const [formValue,setFormValue]=React.useState<initialStateTS>(initialState);

    const {name,surname,email,password,confirmPassword,userClass}=formValue;
    const resetFormValue=()=>{setFormValue(initialState)};

    const handleValueCheck=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target;
        setFormValue({...formValue,[name]:value});
    }

    const handleSendForm=(e:React.ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(password!== confirmPassword && password.length>=8)return;

        try {
            console.log("Form Değerleri");
            console.log(formValue);
        } catch (error) {
            console.log("form hatasi:",error);
        }

    }


    return(
            <div className="w-full h-full items-center justify-center  bg-palette-1 mx-auto flex">
                <div className='w-full h-full flex grid grid-cols-3'>
                    <div className='h-full col-span-2 p-20'>
                        <Image src={tahtaG} alt='authTahta' width={1000} className='object-fill'/>
                    </div>
                    <div className='w-full h-full flex justify-center items-center text-center'>
                        <form onSubmit={handleSendForm} className='w-full h-full py-20'>
                            <div className='w-full h-full grid grid-cols-1'>
                                <div>
                                <Input label="Outlined"/>
                                </div>
                                <div>
                                    <Input label="Outlined"/>
                                </div>
                                <div>
                                    <Input label="Outlined"/>
                                </div>
                                <div>
                                    <Input label="Outlined"/>
                                </div>
                                <div>
                                    <Input label="Outlined"/>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
    )
}


export default AuthenticationPage