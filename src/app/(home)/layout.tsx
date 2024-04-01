import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div>{children}</div>
            <SiteFooter />
        </>
    )
}