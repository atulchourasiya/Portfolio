import { useRef } from 'react';
import { Decal, Float, useTexture } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { generatePlanetPosition } from '../Utility/generatePlanetPosition';

const Planets = () => {
   const { viewport } = useThree();
   const { width, height } = viewport;
   const planetArray = [
      {
         decalTexture: '/reactTexture.png',
         planetTexture: '/reactPlanet.jpg',
         position: generatePlanetPosition(width, height, .8, 6, 55),
      },
      {
         decalTexture: '/javascriptTexture.png',
         planetTexture: '/javascriptPlanet.jpg',
         position: generatePlanetPosition(width, height, .1, 30, 55),
      },
   ];
   return planetArray.map((planet, index) => {
      return <Planet
         key={index}
         planetProps={{
            planetTexture: planet.planetTexture,
            decalTexture: planet.decalTexture,
            position: planet.position
         }}
      />;
   });

};

const Planet = ({ planetProps }) => {
   const [decal] = useTexture([planetProps.decalTexture]);
   const [planetTexture] = useTexture([planetProps.planetTexture]);
   const planetRef = useRef();
   const decalRef = useRef();
   return (
      <Float speed={1.75} rotationIntensity={1.5} floatIntensity={2.5} position={planetProps.position}>
         <mesh ref={planetRef} castShadow receiveShadow scale={8}>
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
   );
};

export default Planets;