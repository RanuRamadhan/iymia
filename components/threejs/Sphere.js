// import { OrbitControls, useTexture, Sphere, Stage } from '@react-three/drei';
// import { Canvas } from '@react-three/fiber';
// import { useControls } from 'leva';
// import React, { Suspense, useEffect } from 'react';
// import * as THREE from 'three';

// function Box() {
//   const { args1 } = useControls({ args1: [1, 32, 32] });

//   const textureProps = useTexture({
//     map: '/images/textures/Metal007_1K_Color.jpg',
//     displacementMap: '/images/textures/Metal007_1K_Displacement.jpg',
//     metalnessMap: '/images/textures/Metal007_1K_Metalness.jpg',
//     normalMap: '/images/textures/Metal007_1K_Normal.jpg',
//     roughnessMap: '/images/textures/Metal007_1K_Roughness.jpg',
//   });

//   useEffect(() => {
//     if (textureProps) {
//       textureProps.map.magFilter = THREE.NearestFilter;
//     }
//   }, [textureProps]);

//   return (
//     <Sphere args={[...args1]}>
//       <meshPhysicalMaterial {...textureProps} displacementScale={0.5} />
//     </Sphere>
//   );
// }

// export default function Sphere() {
//   return (
//     <Canvas shadows dpr={[1, 2]}>
//       <OrbitControls makeDefault autoRotate />
//       <Suspense fallback={null}>
//         <Stage preset="rembrandt" intensity={1} environment="city">
//           <Box />
//         </Stage>
//       </Suspense>
//     </Canvas>
//   );
// }
