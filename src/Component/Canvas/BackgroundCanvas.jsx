import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, MeshReflectorMaterial, BakeShadows, OrbitControls } from '@react-three/drei';
import { easing } from 'maath';
import ComputerModel from './ComputerModel';
import { Preload, PerspectiveCamera } from '@react-three/drei';


export default function BackgroundCanvas() {
   return (
      <Canvas className='!h-dvh' shadows dpr={[1, 1.5]} camera={{ position: [-1.5, 1, 5.5], fov: 45, near: 1, far: 20 }} eventSource={document.getElementById('root')} eventPrefix="client">
         {/* Camera */}
         <PerspectiveCamera
            makeDefault
            fov={30}
            aspect={window.innerWidth / window.innerHeight}
            near={.5}
            far={1000}
            position={[0, 0, 120]}
         />
         {/* Lights */}
         <color attach="background" args={['black']} />
         <fog attach="fog" args={['black', 100, 200]} />
         <ComputerModel />
         <OrbitControls />
         {/* Camera movements */}
         {/* <CameraRig /> */}
         <BakeShadows />
      </Canvas>
   );
}
function CameraRig() {
   useFrame((state, delta) => {
      easing.damp3(state.camera.position, [-1 + (state.pointer.x * state.viewport.width) / 3, (1 + state.pointer.y) / 2, 5.5], 0.5, delta);
      state.camera.lookAt(0, 0, 0);
   });
}
