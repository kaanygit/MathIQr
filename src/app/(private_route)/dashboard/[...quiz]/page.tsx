


interface pageProps{
    params:{quiz:string};
}

const QuizPage:React.FC<pageProps>=({params})=>{

    return(
        <>
        <div>
            deneme
            {params.quiz}
        </div>
        </>
    )
}

export default QuizPage