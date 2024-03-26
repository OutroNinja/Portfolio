"use client"

import { motion } from "framer-motion";
import Link from "next/link";

const SiteFooter = () => {
    return (
        <motion.footer
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
            className="my-10 w-full border-t bg-bacp"
        >
            <div className="container py-7">
                <div className="flex scroll-m-20 items-center justify-between gap-5">
                    <div>
                        <h3 className="mb-5 scroll-m-20 text-3xl font-semibold tracking-tight">
                            You reached the end
                        </h3>
                        <h4 className="scroll-m-20 text-base tracking-tight ">
                            © 2024  <Link href="https://outroninja.is-cool.dev">outroninja.is-cool.dev</Link><br />
                            Powered by OutroNinja
                        </h4>
                    </div>
                </div>
            </div>
        </motion.footer>
    )
}

export default SiteFooter