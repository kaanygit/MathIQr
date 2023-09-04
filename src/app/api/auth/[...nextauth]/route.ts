import startDatabase from "@/lib/db";
import NextAuth from "next-auth/next";
import UserModel from "@/lib/usermodel/user-model";
import { NextAuthOptions } from "next-auth";
import CredentialsContainer from "next-auth/providers/credentials"



export const authOptions:NextAuthOptions={
    session:{
        strategy:"jwt"
    },
    providers:[
        CredentialsContainer({
            type:"credentials",
            credentials:{},
            async authorize(credentials,req){
                const {email,password}=credentials as {
                    email:string;
                    password:string;
                };
                await startDatabase();
                const user=await UserModel.findOne({email});
                if(!user)throw Error("Email is Mismatch");
                
                const passwordMatch=await user.comparePassword(password);
                if(!password)throw Error("Email or Password Mismatch");
                return{
                    name:user.name,
                    classing:user.classing,
                    username:user.username,
                    email:user.email,
                    role:user.role,
                    id:user._id
                };
            },
        }),
    ],
    callbacks:{
        jwt(params:any){
            if(params.user?.role){
                params.token.role=params.user.role
                params.token.id=params.user.id
                params.token.username = params.user.username
                params.token.classing=params.user.classing
            }
            return params.token
        },
        session({session,token}){
            if(session.user){
                (session.user as {id:string}).id=token.id as string;
                (session.user as {role:string}).role=token.role as string;
                (session.user as { username: string }).username = token.username as string;
                (session.user as {classing:string}).classing=token.classing as string;
            }
            return session;
        }
    }
};
const authHandler=NextAuth(authOptions);

export {authHandler as GET,authHandler as POST};