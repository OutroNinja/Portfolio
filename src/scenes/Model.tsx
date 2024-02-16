"use client"

import { useGLTF } from "@react-three/drei";

export function Avatar(props: React.JSX.IntrinsicElements["group"]) {
    const { scene } = useGLTF("/avatar.glb");
    
    return <primitive object={scene} {...props} />
}