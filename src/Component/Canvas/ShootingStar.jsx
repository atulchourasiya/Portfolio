import { useEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useRectangularPositions } from '../Utility/useRectangularPosition';

const ShootingStar = () => {
   const color = [
      [5, 5, 10],
      [5, 5, 10],
      [5, 5, 10],
      [5, 5, 10],
   ];
   return color.map((color, index) => <Star key={index}
      starColor={color} />);
};
const Star = ({ starColor }) => {
   const { camera, viewport } = useThree();
   const { width, height } = viewport;
   const previousTime = useRef(0);
   const starRef = useRef();

   useFrame(({ clock }) => {
      const time = (clock.getElapsedTime() - previousTime.current + (5 + Math.random() * 5)) * 0.03;
      const frustum = new THREE.Frustum();
      const cameraViewProjectionMatrix = new THREE.Matrix4();

      camera.updateMatrixWorld();
      cameraViewProjectionMatrix.multiplyMatrices(
         camera.projectionMatrix,
         camera.matrixWorldInverse
      );
      frustum.setFromProjectionMatrix(cameraViewProjectionMatrix);

      if (!frustum.containsPoint(starRef.current.position)) {
         const [x, y, z] = useRectangularPositions(width, height);
         previousTime.current = clock.getElapsedTime();
         starRef.current.position.set(x, y, z);
      }
      starRef.current.position.y -= time;
      starRef.current.position.x += time;
   });

   useEffect(() => {
      const [x, y, z] = useRectangularPositions(width, height);
      starRef.current.position.set(x, y, z);
   });


   return (
      <group ref={starRef} rotation={[0, 0, 1]} positions={[0, 0, 0]} >
         <mesh >
            <sphereGeometry args={[.3]} />
            <meshBasicMaterial color={starColor} toneMapped={false} />
         </mesh>
         <mesh position={[0, 2.5, 0]}>
            <coneGeometry args={[.3, 5, 16, 1]} />
            <meshBasicMaterial color={starColor} toneMapped={false} />
         </mesh>
      </group>
   );
};

export default ShootingStar;
