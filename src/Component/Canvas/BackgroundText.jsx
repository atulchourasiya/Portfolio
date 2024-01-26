import { Center, MeshReflectorMaterial, Text3D } from "@react-three/drei";
import { useThree } from '@react-three/fiber';
import { HeadingContext } from "../Context/HeadingState.jsx";
import { useContext  } from "react";


const BackgroundText = () => {
   const { viewport  } = useThree();
   const { height } = viewport;
   const { heading } = useContext(HeadingContext);
   const scalingFactor = Math.min(Math.max(window.innerWidth / 768, .4), 1);
  
   return (
      <Center position={[0,window.innerWidth > 768 ? 20 :15,-30]}>
         <Text3D
            size={15}
            letterSpacing={.5}
            scale={window.innerWidth > 768 ? 1 : .3}
            font={'./Poppins Black_Regular.json'}>
            {heading}
            <MeshReflectorMaterial
               blur={[300, 30]}
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
