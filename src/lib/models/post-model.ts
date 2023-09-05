import { model,models,Schema,Document,Model } from "mongoose";

interface PostDocumentInterface extends Document{
    userPhoto:string;
    userName:string;
    grade:string;
    subject:string;
    creationDate:Date;
    photos:[];
    problemDescription:string;
    solutions:[];
    areWeFriends:[];
    problemDomain:string;
}


const communityPostDataSchema=new Schema<PostDocumentInterface,{}>({
    userPhoto:{type:String,required:true},
    userName:{type:String,required:true},
    grade:{type:String,required:true},
    subject:{type:String,required:true},
    creationDate:{type:Date},
    photos:{type:[]},
    problemDescription:{type:String,required:true},
    solutions:{type:[]},
    areWeFriends:{type:[]},
    problemDomain:{type:String,required:true}
},{
    timestamps:true,
});


const ComData=models.Community_post_datas || model('Community_post_datas',communityPostDataSchema);

export default ComData as Model<PostDocumentInterface,{}>