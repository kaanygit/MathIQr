import RootLayout from "@/app/layout"



const AuthenticationPage:React.FC=()=>{
    return(
        <>
            <RootLayout showNavbarAndFooter={false}>
                <div className="w-full h-screen items-center justify-center  bg-palette-3 mx-auto flex">
                   <h1 className="text-white">Authentication page</h1>
                </div>
            </RootLayout>
        </>
    )
}

export default AuthenticationPage