import { Center, MeshReflectorMaterial, Text3D } from "@react-three/drei";
import { HeadingContext } from "../Context/HeadingState.jsx";
import { useContext  } from "react";


const BackgroundText = () => {
   const { heading } = useContext(HeadingContext);
   const scalingFactor = Math.min(Math.max(window.innerWidth / 1280, .4), 1);
   return (
      <Center position={[0,window.innerWidth > 768 ? 20 :14,-25]}>
         <Text3D
            size={13}
            letterSpacing={.5}
            antialias={true}
            scale={scalingFactor}
            font={'./Poppins Black_Regular.json'}>
            {heading}
            <MeshReflectorMaterial
               blur={[300, 30]}
               color={[1.1,1.1,1.1]}
               resolution={2048}
               mixBlur={0.6}
               mixStrength={5}
               roughness={1.5}
               depthScale={1.2}
               minDepthThreshold={0.4}
               maxDepthThreshold={1.4}
               metalness={0.4}
            />
         </Text3D>
      </Center>
   );
};

export default BackgroundText;
