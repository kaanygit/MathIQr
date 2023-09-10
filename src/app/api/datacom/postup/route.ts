import startDatabase from "@/lib/db";
import CommunityDataSchema from '@/lib/models/post-model';
import { NextResponse } from "next/server";

export async function PUT(request:any){
    const {postId,userName,grade,solutionsDate,solutionsPhotos,solutionsDescription,like,dissLike}=await request.json()
    await startDatabase();
    const addedSolution={
        'userName':userName,
        'grade':grade,
        'solutionsDate':solutionsDate,
        'solutionsPhotos':solutionsPhotos,
        'solutionsDescription':solutionsDescription,
        'like':like,
        'dissLike':dissLike
    };
    const existingDocument = await CommunityDataSchema.findByIdAndUpdate(postId,{$push:{solutions:addedSolution}},{new:true});
    return NextResponse.json({message:"Community Post Updated"},{status:200});
}