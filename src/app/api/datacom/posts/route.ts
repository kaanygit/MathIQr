import CommunityDataSchema from '@/lib/models/post-model';
import startDatabase from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(request:any){
  const {userPhoto,userName,grade,subject,creationDate,photos,problemDescription,solutions,areWeFriends,problemDomain}=await request.json();
  await startDatabase();
  await CommunityDataSchema.create({userPhoto,userName,grade,subject,creationDate,photos,problemDescription,solutions,areWeFriends,problemDomain});
  return NextResponse.json({ message: "Post Created" }, { status: 201 });
  }



export async function GET(){
  await startDatabase();
  const CommunityPosts=await CommunityDataSchema.find();
  return NextResponse.json({ CommunityPosts });
}