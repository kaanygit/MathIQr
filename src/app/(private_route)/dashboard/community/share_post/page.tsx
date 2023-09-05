"use client"
import { MdOutlineAddPhotoAlternate } from "react-icons/md"

import SCHOLLCLASS from '../../../../../json/scholl-grades.json'
import SUBJECTLIST from '../../../../../json/subject-list.json'
import { useRouter } from "next/navigation"
import { getSession } from "next-auth/react"
import { useEffect, useState } from "react"

import axios from "axios"

interface SharePostDataInterface{
    userPhoto:String,
    userName:string,
    grade:string,
    subject:string,
    creationDate:Date,
    photos:string[],
    problemDescription:string,
    solutions:string[],
    areWeFriends:string[],
    problemDomain:string,
}
const sharePostDataInitialState={
    userPhoto:'',
    userName:'',
    grade:'',
    subject:'',
    creationDate:new Date(),
    photos:['deneme',"2","2"],
    problemDescription:'',
    solutions:['deneme',"12","21"],
    areWeFriends:["asd","asdasd","asdasdasd"],
    problemDomain:'',   
}


const SharePostCommunity:React.FC=()=>{
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


    const router=useRouter();
    const schoolGrades:string[] = SCHOLLCLASS[0]   
    const subjectList:string[]=SUBJECTLIST



    const sharePostForm=async(e:React.ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setSessionShareData();

        try {   
            console.log(sharePostData);
            const response = await fetch('/api/datacom/posts', {
                method:"POST",
                headers: {
                    'Content-Type': 'application/json', // Başlık ekleyin
                  },
                body:JSON.stringify(sharePostData)
              });

            if (response.ok) {
              console.log('Veri başarıyla kaydedildi');
            //   handleDomainGenerator();
              setSessionShareData();
            } else {
              console.error('Veri kaydı sırasında bir hata oluştu');
            }
          } catch (error) {
            console.error('İstek gönderilirken veya işlenirken bir hata oluştu', error);
          }
    }
    return(
        <main className="mx-auto w-full h-full flex flex-col justify-center items-center  py-6 px-3 shadow-md rounded-2xl" style={{width:"1000px"}}>
            <span className="justify-center w-full items-center text-center text-3xl font-bold text-blue-500 ">Share Your Problems</span>
            <form onSubmit={sharePostForm} className='flex flex-col border-4 rounded-xl w-full p-5 m-5 h-full'>
                <label className='mr-5 w-full'>
                    <select color='blue' className="w-full" defaultValue="1"onChange={handleSelectChange} required>
                        {schoolGrades.map((schollClass:string,index:number):any=>{
                            return <option key={index} value={schollClass}>{schollClass}</option>
                        })}
                    </select>
                </label>
                <label className='mr-5 my-5 w-full'>
                    <select color='blue' className="w-full"  defaultValue="Konu 1" onChange={handleSelectChange2} required>
                        {subjectList.map((subjects:string,index:number):any=>{
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
