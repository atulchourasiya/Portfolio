import { useRef } from 'react';
import { Decal, Float, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Planet = ({ planetProps }) => {
   const [decal] = useTexture([planetProps.decalTexture])
   const [planetTexture] = useTexture([planetProps.planetTexture])
   const planetRef = useRef();
   const decalRef = useRef();
   useFrame(() => {
      planetRef.current.lookAt(0, 0, 0);
      decalRef.current.lookAt(0, 0, 0);
   })
   return (
      <Float speed={1.75} rotationIntensity={1.5} floatIntensity={2.5} position={planetProps.position}>
         <mesh ref={planetRef} castShadow receiveShadow scale={5}>
            <sphereGeometry args={[1, 20, 20]} />
            <meshStandardMaterial
               map={planetTexture}
               polygonOffset
               polygonOffsetFactor={-5}
               flatShading
            />
            <Decal
               ref={decalRef}
               position={[0, 0, 1]}
               rotation={[2 * Math.PI, 0, 0]}
               scale={1.5}
            >
               <meshStandardMaterial map={decal} transparent={true} polygonOffset polygonOffsetFactor={-10} />
            </Decal>
         </mesh>
      </Float>
   )
}

export default Planet;