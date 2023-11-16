import { useFrame, useThree } from "@react-three/fiber";
import {
   CubeTextureLoader,
} from "three";
import { Stars } from '@react-three/drei';
import { useRef } from "react";
import Star from "./Star";
import Planets from "./Planets";

const Environment = ({ starProps }) => {
   const { scene } = useThree();
   const starRef = useRef();
   const loader = new CubeTextureLoader();
   useFrame(({ clock }) => {
      scene.rotation.y = clock.getElapsedTime() * 0.1;
      starRef.current.rotation.y = -clock.getElapsedTime() * 0.1;
   })
   const texture = loader.load([
      '/spaceBackground/xneg1.jpg',
      '/spaceBackground/xpos1.jpg',
      '/spaceBackground/yneg1.jpg',
      '/spaceBackground/ypos1.jpg',
      '/spaceBackground/zpos1.jpg',
      '/spaceBackground/zneg1.jpg',
   ]);
   scene.background = texture;
   return (<group>
      <Stars
         ref={starRef}
         {...starProps}
      />
      <Planets />
   </group>)
}

export default Environment