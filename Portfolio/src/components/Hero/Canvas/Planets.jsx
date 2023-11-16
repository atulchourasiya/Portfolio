import { useFrame } from '@react-three/fiber';
import Planet from './Planet';
import { planetArray } from './PlanetUtils';
import { useRef } from 'react';

const Planets = () => {
   const planetRef = useRef();
   useFrame(({ clock }) => {
      planetRef.current.rotation.y = -clock.getElapsedTime() * 0.1;
   })
   return (
      <group ref={planetRef} position={[0, 0, 0]}>
         {
            planetArray.map((planet, index) => {
               return <Planet
                  key={index}
                  planetProps={{
                     planetTexture: planet.planetTexture,
                     decalTexture: planet.decalTexture,
                     position: planet.position
                  }}
               />
            })
         }
      </group>
   )
}

export default Planets
