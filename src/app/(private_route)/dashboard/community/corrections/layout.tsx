import { ChildrenProps } from "@/app/(admin_route)/layout";
import { LoadingComponent } from "@/component/component.export";
import { Suspense } from "react";




export default function CorrectionsPageLayout({children}:ChildrenProps){
    return <Suspense fallback={<LoadingComponent/>}>{children}</Suspense>
}