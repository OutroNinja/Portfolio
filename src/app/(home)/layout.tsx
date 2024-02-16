import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SideFooter";

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <SiteHeader />
            <div className="container flex-1">{children}</div>
            <SiteFooter />
        </>
    )
}