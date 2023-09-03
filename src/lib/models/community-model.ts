// import { Model,models,model,Schema,Document } from "mongoose";


// export interface CommunityPostDocument extends Document{
//     userPhoto: String,
//     userName: String,
//     grade: String,
//     subject: String,
//     creationDate: String,
//     photos: [String],
//     problemDescription: String,
//     solutions: [{
//         solverUserName: String,
//         grade: String,
//         solutionDate: Date,
//         requiredPhotoForSolution: [String],
//         solutionDescription: String,
//         likeCount: Number,
//         unlikeCount: Number
//       }],
//     areWeFriends: Boolean,
//     problemDomain: String,
//   }

// const CommunityPostSchema=new Schema<CommunityPostDocument>({
//     userPhoto: {type:String,required:true},
//     userName: {type:String,required:true},
//     grade: {type:String,required:true},
//     subject: {string:String,required:true},
//     creationDate: {type:Date,required:true},
//     photos: [String],
//     problemDescription: {type:String,required:true},
//     solutions: [{
//       solverUserName: {type:String,required:false},
//       grade: {type:String,required:false},
//       solutionDate: {type:Date,required:false},
//       requiredPhotoForSolution: [String],
//       solutionDescription: {type:String,required:false},
//       likeCount: {type:Number,required:false},
//       unlikeCount: {type:Number,required:false}
//     }],
//     areWeFriends: {type:Boolean,required:true},
//     problemDomain: {type:String,required:true,unique:true}  
// });

// const CommunityData=models.CommunityData || model('Community Data',CommunityPostSchema);

// export default CommunityData as Model<CommunityPostDocument>



import { Model, models, model, Schema, Document } from 'mongoose';

export interface CommunityPostDocument extends Document {
  userPhoto: string;
  userName: string;
  grade: string;
  subject: string;
  creationDate: Date;
  photos: string[];
  problemDescription: string;
  solutions: {
    solverUserName: string;
    grade: string;
    solutionDate: Date;
    requiredPhotoForSolution: string[];
    solutionDescription: string;
    likeCount: number;
    unlikeCount: number;
  }[];
  areWeFriends: boolean;
  problemDomain: string;
}

const CommunityPostSchema = new Schema<CommunityPostDocument>({
  userPhoto: { type: String, required: true },
  userName: { type: String, required: true },
  grade: { type: String, required: true },
  subject: { type: String, required: true },
  creationDate: { type: Date, required: true },
  photos: [String],
  problemDescription: { type: String, required: true },
  solutions: [
    {
      solverUserName: { type: String, required: false },
      grade: { type: String, required: false },
      solutionDate: { type: Date, required: false },
      requiredPhotoForSolution: [String],
      solutionDescription: { type: String, required: false },
      likeCount: { type: Number, required: false },
      unlikeCount: { type: Number, required: false },
    },
  ],
  areWeFriends: { type: Boolean, required: true },
  problemDomain: { type: String, required: true, unique: true },
});

const CommunityData = models.CommunityData || model<CommunityPostDocument>('CommunityData', CommunityPostSchema);

export default CommunityData as Model<CommunityPostDocument>;
