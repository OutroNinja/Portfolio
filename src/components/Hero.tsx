"use client"

import { FADE_DOWN_ANIMATION_VARIANTS } from "@/constans";
import { LazyMotion, domAnimation, m } from "framer-motion";
import HomeScene from "@/scenes/HomeScene";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { Github } from "./icons";
import { Badge } from "./ui/badge";

const Hero = () => {
    return (
        <LazyMotion features={domAnimation}>
            <m.div
                initial="hidden"
                animate="show"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    show: {
                        transition: {
                            staggerChildren: 0.15,
                        },
                    },
                }}
                className="my-14 flex items-center justify-between "
            >
                <div className="w-[40rem]">
                    <m.h2
                        variants={FADE_DOWN_ANIMATION_VARIANTS}
                    >
                        <Badge className="rounded-full p-1 px-3 inline-block select-none">
                            <Typewriter
                                options={{
                                    strings: [
                                        "Web Developer",
                                        "Next.js Developer",
                                        "Javascript Developer",
                                        "Discord Bot Developer",
                                        "Software Enginner",
                                        "Typescript Developer",
                                        "Human",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </Badge>
                    </m.h2>
                    <m.h1
                        variants={FADE_DOWN_ANIMATION_VARIANTS}
                        className="text-6xl my-5 font-bold md:text-6xl"
                    >
                        👋 Hi, I&apos;m OutroNinja
                    </m.h1>
                    <m.p
                        variants={FADE_DOWN_ANIMATION_VARIANTS}
                        className="mt-3 text-base text-muted-foreground md:text-lg"
                    >
                        I know some progamming languages like Javascript, Typescript and others.
                        I&apos;ve created some websites and also some games.
                    </m.p>
                    <m.div
                        variants={FADE_DOWN_ANIMATION_VARIANTS}
                        className="mt-5 flex gap-5"
                    >
                        <Link
                            aria-label="Github"
                            href="https://github.com/OutroNinja"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(buttonVariants({ variant: "outline" }))}
                        >
                            <Github className="size-6" />
                            <span className="sr-only">Github</span>
                        </Link>
                    </m.div>
                </div>
                <m.div
                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                    className="hidden h-[500px] items-center justify-center lg:flex"
                >
                    <HomeScene />
                </m.div>
            </m.div>
        </LazyMotion>
    )
}

export default Hero