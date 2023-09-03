"use client"
import { Option, Select, Textarea } from "@material-tailwind/react"
import { MdOutlineAddPhotoAlternate } from "react-icons/md"

import SCHOLLCLASS from '../../../../../json/scholl-grades.json'
import SUBJECTLIST from '../../../../../json/subject-list.json'
import { useRouter } from "next/navigation"
import { getSession, useSession } from "next-auth/react"
import { useEffect, useState } from "react"

import DenemeResim from '../../../../../assets/aiteacher.png'
import axios from "axios"

interface SharePostDataInterface{
    userPhoto:String,
    userName:string,
    grade:string,
    subject:string,
    creationDate:Date,
    photos:string,
    problemDescription:string,
    solutions:any[],
    areWeFriends:boolean,
    problemDomain:string,
}
const sharePostDataInitialState={
    userPhoto:'',
    userName:'',
    grade:'',
    subject:'',
    creationDate:new Date(),
    photos:'',
    problemDescription:'',
    solutions:['deneme'],
    areWeFriends:false,
    problemDomain:'',   
}


const SharePostCommunity:React.FC=()=>{
    // const {data:session,status}=useSession();


    const [sharePostData,setSharePostData]=useState<SharePostDataInterface>(sharePostDataInitialState)
    const [selectedOption, setSelectedOption] = useState<string>('');
    const {userPhoto,userName,grade,subject,creationDate,photos,problemDescription,solutions,areWeFriends,problemDomain}=sharePostData
    const handleChanceInput=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target;
        setSharePostData({...sharePostData,[name]:value});
    };    
    const handleSelectChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        const newSelectedOption = e.target.value;
        setSelectedOption(newSelectedOption);
        setSharePostData((prevForm) => ({
            ...prevForm,
            grade: newSelectedOption,
          }));
      };
    const handleSelectChange2 = (e:React.ChangeEvent<HTMLSelectElement>) => {
        const newSelectedOption = e.target.value;
        setSelectedOption(newSelectedOption);
        setSharePostData((prevForm) => ({
            ...prevForm,
            subject: newSelectedOption,
          }));
      };
    const handleTextArea=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
        const newTextArea=e.target.value;
        setSelectedOption(newTextArea);
        setSharePostData((prevForm)=>({
            ...prevForm,
            problemDescription:newTextArea
        }))
    }
    const handleDomainGenerator=():string=>{
        let code:string='';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for(let i:number=0;i<5;i++){
            const randomIndex:number=Math.floor(Math.random()*characters.length);
            code+=characters.charAt(randomIndex);
        }
        return code;
    }

    useEffect(()=>{
        const randomCode = handleDomainGenerator();
        const setSessionShareData=async()=>{
            try {
                const session = await getSession();
                if (session?.user) {
                  const randomCode = handleDomainGenerator();
                  setSharePostData((prevData) => ({
                    ...prevData,
                    userName: session.user.username,
                    userPhoto: "image.jpeg",
                    photos: "DenemeResim",
                    problemDomain: randomCode
                  }));
                } else {
                  console.log('Session Gelmedi');
                }
              } catch (error) {
                console.log('Error : ', error);
              }
        }
        setSessionShareData();

    },[])


    const router=useRouter();
    const schoolGrades:string[] = SCHOLLCLASS[0]   
    const subjectList:string[]=SUBJECTLIST



    const sharePostForm=async(e:React.ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault();

        try {   
            console.log(sharePostData);
            const response =await fetch('/api/community_data/addPost',{
                method:'POST',
                headers:{
                    Accept: 'application/json',
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(sharePostData)
            });
            if(response.ok){
                console.log('Veri başarıyla eklendi.');
            }else{
                console.error('Veri eklenirken hata oluştu.');
            }
            // router.push('/dashboard/community/my_problems')
        } catch (error) {
            console.log('Error : ',error)
        }
    }
    return(
        <main className="mx-auto w-full h-full flex flex-col justify-center items-center  py-6 px-3 shadow-md rounded-2xl" style={{width:"1000px"}}>
            <span className="justify-center w-full items-center text-center text-3xl font-bold text-blue-500 ">Share Your Problems</span>
            <form onSubmit={sharePostForm} className='flex flex-col border-4 rounded-xl w-full p-5 m-5 h-full'>
                <label className='mr-5 w-full'>
                    <select color='blue' className="w-full" value={grade} defaultValue="1"onChange={handleSelectChange} required>
                        {schoolGrades.map((schollClass:string,index:number):React.ReactNode=>{
                            return <option key={index} value={schollClass}>{schollClass}</option>
                        })}
                    </select>
                </label>
                <label className='mr-5 my-5 w-full'>
                    <select color='blue' value={subject} className="w-full"  defaultValue="Konu 1" onChange={handleSelectChange2} required>
                        {subjectList.map((subjects:string,index:number):React.ReactNode=>{
                            return <option key={index} value={subjects}>{subjects}</option>
                        })}
                    </select>
                </label>
                <div className='flex flex-row w-full'>
                    <span className='flex flex-1 justify-center items-center text-4xl cursor-pointer border-4 mr-2 flex-col'><MdOutlineAddPhotoAlternate/><span className="text-xl justify-center items-center text-center">Add Photo is Problem</span></span>
                    <div className='flex-1 flex'>
                        <textarea  rows={12} cols={40} onChange={handleTextArea}  value={problemDescription} />
                     </div>
                </div>
                <button type="submit" className="py-3 px-16 bg-blue-500 rounded-2xl text-white font-medium my-5 hover:bg-blue-700 transition duration-300 ease-in-out" >Gönder</button>
            </form>
        </main>
    )
}

export default SharePostCommunity