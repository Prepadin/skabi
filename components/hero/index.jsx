'use client'

import * as THREE from 'three'
import React, { Suspense, useEffect, useState, useRef, useLayoutEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Reflector, Text, useTexture, MeshReflectorMaterial, Environment, OrbitControls, CameraControls, RenderTexture, Float, useFont, useGLTF } from '@react-three/drei'
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { degToRad, lerp } from "three/src/math/MathUtils";
import { Color } from "three";



export default function Hero() {
    const controls = useRef();
    const meshFitCameraHome = useRef();
    const meshFitCameraStore = useRef();
    const textMaterial = useRef();
    const bloomColor = new Color("#fff");
    bloomColor.multiplyScalar(1.5);

    // const intro = async () => {
    //   controls.current.dolly(-20);
    // };

    // useEffect(() => {

    //   intro();
    // }, [controls.current]);


    return (

        // <Canvas concurrent gl={{ alpha: false }} pixelRatio={[1, 1.5]} camera={{ position: [0, 3, 100], fov: 15 }}>
        <Canvas id="myCanvas" width="100" height="100" shadows camera={{ position: [0, 0, 8], fov: 100 }}>
            <color attach="background" args={["#171720"]} />
            <fog attach="fog" args={["#171720", 10, 30]} />
            {/* <CameraControls ref={controls} enabled={false} /> */}
            {/* <mesh ref={meshFitCameraHome} position-z={1.5} visible={false}>
        <boxGeometry args={[7.5, 2, 2]} />
        <meshBasicMaterial color="orange" transparent opacity={0.5} />
      </mesh> */}

            {/* <group rotation-y={degToRad(-25)} position-x={3}>

          <mesh ref={meshFitCameraStore} visible={false}>
            <boxGeometry args={[2, 1, 2]} />
            <meshBasicMaterial color="red" transparent opacity={0.5} />
          </mesh>
        </group> */}
            {/* <mesh position-y={-3.8} rotation-x={-Math.PI / 2}>
          <planeGeometry args={[100, 100]} />
          <MeshReflectorMaterial
            blur={[100, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={10}
            roughness={1}
            depthScale={1}
            opacity={0.5}
            transparent
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#333"
            metalness={0.5}
          />
        </mesh> */}

            <VideoText />
            <Environment preset="sunset" />
            <EffectComposer>
                <Bloom mipmapBlur intensity={6.2} />
            </EffectComposer>
        </Canvas>


    )
}

// function Carla(props) {
//   const { scene } = useGLTF('/carla-draco.glb')
//   return <primitive object={scene} {...props} />
// }

function VideoText(props) {
    const [video] = useState(() => Object.assign(document.createElement('video'), { src: '/skab1.mp4', crossOrigin: 'Anonymous', loop: true, muted: true }))
    useEffect(() => void video.play(), [video])
    const { viewport } = useThree();
    const ScalingFactor = Math.max(window.innerWidth / 1300, 0.5);

    return (
        <>
            <group scale={ScalingFactor}>
                <Text
                    font="/Inter-Bold.woff"
                    fontSize={3}
                    letterSpacing={-0.04}
                    {...props}
                    position-x={1.5}
                    position-y={-0.3}
                    position-z={0}
                    lineHeight={0.8}
                    textAlign="center"
                    rotation-y={degToRad(15)}
                    anchorY={"bottom"}

                >
                    ŠKABRIJEL
                    < meshBasicMaterial toneMapped={false} >
                        <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
                    </meshBasicMaterial >
                </Text >
            </group>
            <mesh position-y={-0.20} rotation-x={-Math.PI / 2}>
                <planeGeometry args={[100, 100]} />
                <MeshReflectorMaterial
                    blur={[100, 100]}
                    resolution={2048}
                    mixBlur={1}
                    mixStrength={10}
                    roughness={1}
                    depthScale={1}
                    opacity={0.5}
                    transparent
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.4}
                    color="#333"
                    metalness={0.5}
                />
            </mesh>

        </>
    )
}

// function Ground() {
//   const [floor, normal] = useTexture(['/SurfaceImperfections003_1K_var1.jpg', '/SurfaceImperfections003_1K_Normal.jpg'])
//   return (
//     <Reflector blur={[400, 100]} resolution={512} args={[10, 10]} mirror={0.5} mixBlur={6} mixStrength={1.5} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
//       {(Material, props) => <Material color="#a0a0a0" metalness={0.4} roughnessMap={floor} normalMap={normal} normalScale={[2, 2]} {...props} />}
//     </Reflector>
//   )
// }

// function Intro() {
//   const [vec] = useState(() => new THREE.Vector3())
//   return useFrame((state) => {
//     state.camera.position.lerp(vec.set(state.mouse.x * 5, 3 + state.mouse.y * 2, 14), 0.05)
//     state.camera.lookAt(0, 0, 0)
//   })
// }

useFont.preload("fonts/Poppins-Black.ttf");