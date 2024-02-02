import { useRef } from 'react';
import { Decal, Float, useTexture } from '@react-three/drei';

const Planets = () => {
   const planetArray = [
      {
         decalTexture: '/reactTexture.png',
         planetTexture: '/reactPlanet.jpg',
      },
      {
         decalTexture: '/javascriptTexture.png',
         planetTexture: '/javascriptPlanet.jpg',
      },
   ];
   return planetArray.map((planet, index) => {
      return <Planet
         key={index}
         decalTexture={planet.decalTexture}
         planetTexture={planet.planetTexture}
      />;
   });


};

const Planet = ({ decalTexture, planetTexture }) => {
   const [decal] = useTexture([decalTexture]);
   const [planet] = useTexture([planetTexture]);
   const planetRef = useRef();
   const decalRef = useRef();
   return (
      <Float speed={1.75} rotationIntensity={1.5} floatIntensity={2.5} position={[0, 0, 0]}>
         <mesh ref={planetRef} castShadow receiveShadow scale={6}>
            <sphereGeometry args={[1, 20, 20]} />
            <meshStandardMaterial
               map={planet}
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
   );
};

export default Planets;