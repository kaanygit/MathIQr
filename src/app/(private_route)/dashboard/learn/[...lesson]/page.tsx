

interface ParamsProps{
    params:{lesson:string};
}


const LessonPage:React.FC<ParamsProps>=({params})=>{
    return(
        <div key={1}>
            <span>Lesson</span>
            <span>{params.lesson}</span>
        </div>
    )
}

export default LessonPage