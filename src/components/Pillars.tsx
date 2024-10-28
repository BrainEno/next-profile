"use client"

import * as THREE from 'three'
import { useGLTF } from "@react-three/drei"
import { Canvas, ThreeElements, useFrame, useThree } from "@react-three/fiber"
import { useRef, useState } from "react"


export const Pillars = ({ isMobile = false, speed = 0.3 }) => {
    const ref = useRef<null | THREE.Object3D>(null)
    const { viewport, camera } = useThree()
    const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -3])

    const GLTF = useGLTF('/models/pillars.glb')

    const [data] = useState({
        y: THREE.MathUtils.randFloatSpread(height * 2),
        x: THREE.MathUtils.randFloatSpread(2),
        z: THREE.MathUtils.randFloatSpread(-0.5),
        spin: THREE.MathUtils.randFloat(8, 12),
        rx: Math.random() * Math.PI,
        rz: Math.random() * Math.PI,
    })

    useFrame((state, dt) => {
        if (dt < 0.1) ref!.current!.rotation!.set(data.x, (data.y += dt * speed), data.z)
        if (data.y > height * 1) data.y = -(height * (1))
    })

    return (<primitive
        ref={ref}
        object={GLTF.scene}
        scale={isMobile ? 0.02 : 0.015}
        position={[1.0, -3.1, -3.0]}
        rotation={[0, -1, 0.5]}
    />)
}


const PillarsCanvas = () => {
    return (
        <Canvas flat dpr={[1, 1.5]} camera={{ position: [0, -5, 10], fov: 50, near: 1, far: 95 }}>
            <color attach="background" args={['#000']} />
            <directionalLight
                position={[3.3, 1.0, 4.4]}
                castShadow
                intensity={Math.PI * 2}
            />
            <spotLight position={[10, 20, 10]} penumbra={1} decay={0} intensity={3} color="pink" />
            <Pillars />
        </Canvas>
    )
}

export default PillarsCanvas