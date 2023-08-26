

const LoadingDotComponent:React.FC=()=>{
    return(
        <div className="flex items-center justify-center h-full p-5 bg-gray-100 w-full">
            <div className="flex space-x-2 animate-pulse">
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
            </div>
        </div>
    )
}

export default LoadingDotComponent