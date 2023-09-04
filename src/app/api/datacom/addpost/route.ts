import CommunityData from '@/lib/models/comdata';
import startDatabase from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(request:any){
  const {userPhoto,userName,grade,subject,creationDate,photos,problemDescription,solutions,areWeFriends,problemDomain}=await request.json();
  await startDatabase();
  await CommunityData.create({userPhoto,userName,grade,subject,creationDate,problemDescription,areWeFriends,problemDomain});
  return NextResponse.json({ message: "Post Created" }, { status: 201 });
}


export async function GET(){
    await startDatabase();
    const communityPostDataGet=await CommunityData.find();
    return NextResponse.json({communityPostDataGet});
  }