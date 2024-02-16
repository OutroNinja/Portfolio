"use client"

import dynamic from "next/dynamic"
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Html } from "@react-three/drei"

const Avatar = dynamic(() => import("@/scenes/Model").then((mod) => mod.Avatar), {
    ssr: false,
    loading: () => {
        return (
            <Html>
                <div>
                    Loading...
                </div>
            </Html>
        )
    },
})

const Common = dynamic(
    () => import("@/scenes/View").then((mod) => mod.Common),
    {
        ssr: false,
    },
)

const HomeScene = () => {
    return (
        <Canvas
            style={{
                height: 400,
                widows: 400,
            }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [4, 3, 6],
            }}
            gl={{ antialias: true }}
        >
            <Suspense fallback={null}>
                <Avatar position={[-0.5, -1.5, 0]} scale={[4, 4, 4]} />
                <Common />
            </Suspense>
        </Canvas>
    )
}

export default HomeScene