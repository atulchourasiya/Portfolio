import { Canvas, useFrame } from '@react-three/fiber';
import { BakeShadows, OrbitControls, Stars } from '@react-three/drei';
import ComputerModel from './ComputerModel';
import { Preload, PerspectiveCamera } from '@react-three/drei';
import { useControls, Leva } from "leva";
import ShootingStar from './ShootingStar';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import BackgroundText from './BackgroundText';
import { useState, useRef, useEffect } from 'react';
import { easing } from 'maath';
import { Perf } from 'r3f-perf';


export default function BackgroundCanvas() {
   const color = useControls({
      backgroundColor: '#000',
   });
   return (
      <Canvas className='!h-dvh' shadows dpr={[1, 1.5]} camera={{ position: [-1.5, 1, 5.5], fov: 45, near: 80, far: 100 }} eventSource={document.getElementById('root')} eventPrefix="client">
         {/* <Perf position={"top-left"} /> */}
         <Leva hidden />
         <PerspectiveCamera
            makeDefault
            fov={30}
            aspect={window.innerWidth / window.innerHeight}
            near={.1}
            far={1000}
            position={[0, 0, 120]}
         />
         <color attach="background" args={[color.backgroundColor]} />
         <fog attach="fog" args={['black', 140, 170]} />
         <CameraRig >
            <Stars />
            <ShootingStar />
            <ComputerModel />
            <BackgroundText />
         </CameraRig>

         <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2 - 0.3}
            minPolarAngle={Math.PI / 2 - 0.3}
            enableDamping={true}
            enableRotate={false}
         />
         <Preload all />
         <BakeShadows />
         <EffectComposer>
            <Bloom mipmapBlur luminanceThreshold={1.5} />
         </EffectComposer>
      </Canvas>
   );
}

const CameraRig = ({ children }) => {
   const [mouseOut, setMouseOut] = useState(false);
   const groupRef = useRef();
   useFrame((state, delta) => {
      if (mouseOut) {
         state.pointer.x = 0;
         state.pointer.y = 0;
      }
      easing.dampE(
         groupRef.current.rotation,
         [0 , state.pointer.x * .5, 0],
         .25,
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
};
