import { Canvas, useFrame } from '@react-three/fiber';
import { BakeShadows, OrbitControls, Stars, Preload, PerspectiveCamera, Loader } from '@react-three/drei';
import ComputerModel from './ComputerModel';
import ShootingStar from './ShootingStar';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import BackgroundText from './BackgroundText';
import { useRef, useEffect, Suspense, useContext } from 'react';
import { easing } from 'maath';
import { LoadingContext } from '../Context/LoadingState';
import LoadingScreen from '../Overlay/LoadingScreen/LoadingScreen';


export default function BackgroundCanvas() {
   const {loading} = useContext(LoadingContext);
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
           {loading ? <LoadingScreen /> :
            <CameraRig >
               <Stars />
               <ShootingStar />
               <ComputerModel />
               <BackgroundText />
            </CameraRig>}
         </Suspense>
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


function CameraRig({ children }) {
   const groupRef = useRef();
   const pointer = useRef({ x: 0, y: 0 });

   useEffect(() => {
      if (window.matchMedia('(pointer:coarse)').matches) {
         document.addEventListener('touchmove', handleMouseMove);
         document.addEventListener('touchcancel', handleMouseOut);
      }
      else if (window.matchMedia('(pointer:fine)').matches) {
         document.addEventListener('mousemove', handleMouseMove);
         document.addEventListener('mouseout', handleMouseOut);
      }
      return () => {
         document.removeEventListener('mousemove', handleMouseMove);
         document.removeEventListener('mouseout', handleMouseOut);

      };
   }, []);

   const handleMouseMove = (event) => {
      const canvas = document.querySelector('canvas');
      const canvasRect = canvas.getBoundingClientRect();

      const mouseX = event.clientX - canvasRect.left;
      const mouseY = event.clientY - canvasRect.top;

      pointer.current = {
         x: (mouseX / canvasRect.width) * 2 - 1,
         y: -(mouseY / canvasRect.height) * 2 + 1,
      };
   };

   const handleMouseOut = () => {
      pointer.current.x = 0;
      pointer.current.y = 0;
   };

   useFrame((state, delta) => {
      easing.dampE(
         groupRef.current.rotation,
         [0, pointer.current.x / 4, 0],
         0.85,
         delta
      );
   });

   return <group ref={groupRef}>{children}</group>;
}
