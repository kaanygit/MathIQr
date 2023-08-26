import { LoadingComponent } from "@/component/component.export";
import { ReactNode, Suspense, useReducer } from "react";
import PageParams from '../../../../../json/params.json'
import { useRouter } from "next/router";



interface LayoutPageProps{
    children:ReactNode
}

export default function LessonParamsLayout({children}:LayoutPageProps) {
    return (
        <Suspense fallback={<LoadingComponent/>}>
            {children}
        </Suspense>
    )
}