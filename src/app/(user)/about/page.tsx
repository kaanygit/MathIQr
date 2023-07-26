import RootLayout from "@/app/layout"



const AboutPage:React.FC=()=>{
    return(
        <>
            <RootLayout showNavbarAndFooter={true}>
                <div className="w-full h-screen items-center justify-center  bg-palette-3 mx-auto flex">
                   <h1 className="text-white">About page</h1>
                </div>
            </RootLayout>
        </>
    )
}

export default AboutPage