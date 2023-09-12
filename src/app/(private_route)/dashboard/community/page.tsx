import { redirect } from "next/navigation"




const CommunityPage:React.FC=()=>{
    return redirect('/dashboard/community/discover')
};

export default CommunityPage;