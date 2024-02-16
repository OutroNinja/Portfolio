"use client"

import { OrbitControls } from "@react-three/drei"
import { Suspense } from "react"

export const Common = () => (
    <Suspense fallback={null}>
        <OrbitControls autoRotate autoRotateSpeed={0.5} enablePan={false} enableRotate={false} enableZoom={false} />
        <ambientLight intensity={1.8} />
    </Suspense>
)