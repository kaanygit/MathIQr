import startDatabase from "@/lib/db";
import UserModel from "@/lib/usermodel/user-model";
import { NextResponse } from "next/server";

interface NewUserRequest{
    name:string;
    classing:string;
    username:string;
    email:string;
    passwordUp:string;
};

interface NewUserResponse{
    id:string;
    name:string;
    classing:string;
    username:string;
    email:string;
};

type NewResponse=NextResponse<{user?:NewUserResponse;error?:string}>;

export const POST=async (req:Request):Promise<NewResponse>=>{
    const body=(await req.json()) as NewUserRequest;
    await startDatabase();

    const oldUser=await UserModel.findOne({email:body.email});
    const oldUserName=await UserModel.findOne({username:body.username});

    if(oldUser)
        return NextResponse.json(
            {error:"Email is already in use"},
            {status:422}    
        )
    if(oldUserName)
            return NextResponse.json(
                {error:"Username is already in use"},
                {status:423}
            )

    const user=await UserModel.create({...body});

    return NextResponse.json({
        user:{
            id:user._id.toString(),
            name:user.name,
            classing:user.classing,
            username:user.username,
            email:user.email,
            role:user.role
        },
    });
}
