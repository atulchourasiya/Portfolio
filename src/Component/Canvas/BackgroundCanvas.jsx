import { Canvas, useFrame } from '@react-three/fiber';
import { BakeShadows, OrbitControls, Stars, Preload, PerspectiveCamera } from '@react-three/drei';
import ComputerModel from './ComputerModel';
import ShootingStar from './ShootingStar';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import BackgroundText from './BackgroundText';
import { useRef, useEffect, Suspense } from 'react';
import { easing } from 'maath';
import { useThree } from 'react-three-fiber';
import Planets from './Planets';
import { Perf } from 'r3f-perf';
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
         {/* <Perf openByDefault trackGPU={true} position={'top-right'} /> */}
         <Suspense fallback={null}>
            {/* <CameraRig > */}
               <Stars />
               <ShootingStar />
               <ComputerModel />
               <BackgroundText />
               <Planets />
            {/* </CameraRig> */}
         </Suspense>
         <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2 - 0.3}
            minPolarAngle={Math.PI / 2 - 0.3}
            minAzimuthAngle={window.innerWidth > 768 ? (-Math.PI / 4) : (-Math.PI / 8)}  // Limit to 45 degrees to the left
            maxAzimuthAngle={window.innerWidth > 768 ? Math.PI / 4 : Math.PI / 8 } // Limit to 45 degrees to the right
            enableDamping={true}
            // enableRotate={false}
         />
         <Preload all />
         <BakeShadows />
         <EffectComposer>
            <Bloom mipmapBlur luminanceThreshold={1.5} />
         </EffectComposer>
      </Canvas>
   );
}


// function CameraRig({ children }) {
//    const groupRef = useRef();
//    const pointer = useRef({ x: 0, y: 0 });


//    useEffect(() => {
//       document.addEventListener('mousemove', handleMouseMove);
//       document.addEventListener('mouseout', handleMouseOut);
//       return () => {
//          document.removeEventListener('mousemove', handleMouseMove);
//          document.removeEventListener('mouseout', handleMouseOut);
//       };
//    }, []);

//    const handleMouseMove = (event) => {
//       const canvas = document.querySelector('canvas');
//       const canvasRect = canvas.getBoundingClientRect();

//       const mouseX = event.clientX - canvasRect.left;
//       const mouseY = event.clientY - canvasRect.top;

//       pointer.current = {
//          x: (mouseX / canvasRect.width) * 2 - 1,
//          y: -(mouseY / canvasRect.height) * 2 + 1,
//       };
//    };

//    const handleMouseOut = () => {
//       pointer.current.x = 0;
//       pointer.current.y = 0;
//    };

//    useFrame((state, delta) => {
//       easing.dampE(
//          groupRef.current.rotation,
//          [0, pointer.current.x / 4, 0],
//          0.35,
//          delta
//       );
//       if (window.matchMedia('(pointer: coarse)').matches && pointer.current.x > 0) {
//          pointer.current.x -= .05;
//       } else if (window.matchMedia('(pointer: coarse)').matches && pointer.current.x < 0) {
//          pointer.current.x += .05;
//       }
//    });

//    return <group ref={groupRef}>{children}</group>;
// }
