import mongoose,{Schema} from "mongoose";


const communityPostDataSchema=new Schema({
    userPhoto:String,
    userName:String,
    grade:String,
    subject:String,
    creationDate:Date,
    photos:[],
    problemDescription:String,
    solutions:[],
    areWeFriends:[],
    problemDomain:String
},{
    timestamps:true,
});

const CommunityData=mongoose.models.CommunityData || mongoose.model("community_post_data",communityPostDataSchema);

export default CommunityData