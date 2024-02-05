import { useRef } from 'react';
import { Decal, Float, useTexture } from '@react-three/drei';
import { useThree } from 'react-three-fiber';

const Planets = () => {
   const {  viewport } = useThree();
   const { width } = viewport;

   const planetArray = [
      {
         decalTexture: '/reactTexture.png',
         planetTexture: '/reactPlanet.jpg',
         position: window.innerWidth > 768 ? [-(width / 2) - 5, 20, -40] : [-(width / 2) + 10, 25, -40]
      },
      {
         decalTexture: '/javascriptTexture.png',
         planetTexture: '/javascriptPlanet.jpg',
         position: window.innerWidth > 768 ? [-((width / 2)/1.5) -10, 4, -40] : [-((width / 2)) + 2, 3, -40]
      },
      {
         decalTexture: '/nodeTexture.png',
         planetTexture: '/nodePlanet.jpg',
         position: window.innerWidth > 768 ? [((width / 2) ) -2, 20, -40] : [((width / 2) ) -2, 22, -40]
      },
      {
         decalTexture: '/reduxTexture.png',
         planetTexture: '/reduxPlanet.jpg',
         position: window.innerWidth > 768 ?[(width / 2) - 3, 3, -40] : [(width / 2) + 0, 3, -40]
      },
   ];

   return planetArray.map((planet, index) => {
      return <Planet
         key={index}
         decalTexture={planet.decalTexture}
         planetTexture={planet.planetTexture}
         position={planet.position}
      />;
   });


};

const Planet = ({ decalTexture, planetTexture, position }) => {
   const [decal] = useTexture([decalTexture]);
   const [planet] = useTexture([planetTexture]);
   const planetRef = useRef();
   const decalRef = useRef();
   const scalingFactor = Math.min(Math.max(window.innerWidth * 0.01, 3.5), 4.5);
   return (
      <Float speed={1.75} rotationIntensity={1.5} floatIntensity={2.5} position={position}>
         <mesh ref={planetRef} castShadow receiveShadow scale={window.innerWidth > 768 ? 5 : scalingFactor}>
            <sphereGeometry args={[1, 20, 20]} />
            <meshStandardMaterial
               map={planet}
               polygonOffset
               polygonOffsetFactor={-5}
               flatShading
               color={
                  [1.1, 1.1, 1.1]
               } 
               toneMapped={false}
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