export type SiteConfig = typeof siteConfig

const links = {
    github: "https://github.com/outroninja/Portfolio",
    githubAccount: "https://github.com/outroninja"
}

export const siteConfig = {
    name: "OutroNinja",
    description: "Personal portfolio of OutroNinja",
    url: process.env.NEXT_PUBLIC_APP_URL,
    sourceCode: links.github,
    mainNav: [
        {
            title: "Home",
            href: "/",
            items: [],
        },
        {
            title: "Projects",
            href: "/projects",
            items: [],
        },
        {
            title: "About",
            href: "/about",
            items: [],
        },
    ],
    footerNav: [
        {
            title: "Social",
            items: [
                {
                    title: "GitHub",
                    href: links.githubAccount,
                    external: true,
                },
            ],
        },
    ]
}