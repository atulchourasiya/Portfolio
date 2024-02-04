import { Canvas, useFrame } from '@react-three/fiber';
import { BakeShadows, OrbitControls, Stars, Preload, PerspectiveCamera } from '@react-three/drei';
import ComputerModel from './ComputerModel';
import ShootingStar from './ShootingStar';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import BackgroundText from './BackgroundText';
import { useRef, useEffect, Suspense, useState } from 'react';
import { easing } from 'maath';
import Planets from './Planets';

export default function BackgroundCanvas() {
   return (
      <Canvas className='!h-dvh' shadows dpr={[1, 1.5]} camera={{ position: [-1.5, 1, 5.5], fov: 45, near: 80, far: 100 }} eventSource={document.getElementById('root')} eventPrefix="client">
         <PerspectiveCamera
            makeDefault
            fov={30}
            aspect={window.innerWidth / window.innerHeight}
            near={.1}
            far={1000}
            position={[0, 0, 120]}
         />
         <color attach="background" args={['#000']} />
         <fog attach="fog" args={['black', 140, 170]} />
         <Suspense fallback={null}>
            {
               window.matchMedia('(pointer: fine)').matches ?
                  <CameraRig >
                     <Stars />
                     <ShootingStar />
                     <ComputerModel />
                     <BackgroundText />
                     <Planets />
                  </CameraRig> :
                  <>
                     <Stars />
                     <ShootingStar />
                     <ComputerModel />
                     <BackgroundText />
                     <Planets />
                  </>
            }
         </Suspense>
         <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2 - 0.3}
            minPolarAngle={Math.PI / 2 - 0.3}
            minAzimuthAngle={window.matchMedia('(pointer : fine)').matches ? 0 : (-Math.PI / 8)}  // Limit to 45 degrees to the left
            maxAzimuthAngle={window.matchMedia('(pointer : fine)').matches ? 0 : (Math.PI / 8)} // Limit to 45 degrees to the right
            enableDamping={true}
            enableRotate={window.matchMedia('(pointer: fine)').matches ? false : true}
         />
         <Preload all />
         <BakeShadows />
         <EffectComposer>
            <Bloom mipmapBlur luminanceThreshold={1.5} />
         </EffectComposer>
      </Canvas>
   );
}


function CameraRig({ children }) {
   const [mouseOut, setMouseOut] = useState(false);
   const groupRef = useRef();
   useFrame((state, delta) => {
      if (mouseOut) {
         state.pointer.x = 0;
         state.pointer.y = 0;
      }
      easing.dampE(
         groupRef.current.rotation,
         [0, state.pointer.x / 3, 0],
         0.25,
         delta
      );
   });
   const handleMouseOut = () => {
      setMouseOut(true);
   };
   const handleMouseOver = () => {
      setMouseOut(false);
   };
   useEffect(() => {
      window.addEventListener('mouseout', handleMouseOut);
      window.addEventListener('mouseover', handleMouseOver);
      return () => {
         window.removeEventListener('mouseout', handleMouseOut);
         window.removeEventListener('mouseover', handleMouseOver);
      };
   }, [mouseOut]);
   return (
      <group ref={groupRef}>
         {children}
      </group>
   );
}
