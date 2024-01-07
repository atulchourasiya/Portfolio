import { useRef, useState } from 'react';
import { Points, PointMaterial } from '@react-three/drei';
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import { generateSphericalPositions } from '../../../utility/GenerateSphericalPositions';

const Star = (props) => {
   const starTexture = useLoader(TextureLoader, './starTexture.png')
   const [sphere] = useState(() => {
      let array = [];
      for (let i = 0; i < 100; i++) {
         array.push(...generateSphericalPositions(125))
      }
      return array
   })
   const starsRef = useRef();
   useFrame(({ clock }) => {
      starsRef.current.rotation.y = -clock.getElapsedTime() * 0.01
   })
   return (
      <group ref={starsRef}>
         <Points positions={new Float32Array(sphere)}
            stride={3} frustumCulled={props} >
            <PointMaterial
               map={starTexture}
               transparent={true}
               size={15}
               sizeAttenuation={true}
               depthWrite={false}
            />
         </Points>
      </group>
   )
}

export default Star;