import React from "react";
import { useGLTF, Center, MeshReflectorMaterial  } from "@react-three/drei";
import { useControls } from "leva";

const ComputerModel = (props) => {
  const { nodes, materials } = useGLTF("/ComputerModel.glb");
  const decay = useControls({
    'decay': {
      value: 1.25,
      min: 0,
      max: 10,
      step: .1,
    }
  });

  return (
    <Center>
      <group position={[0, 3, 0]}  {...props} dispose={null} >
        <spotLight
          intensity={600}
          decay={decay.decay}
          color="#4C81F2"
          position={[0, 40, 0]}
        />
        <spotLight
          intensity={600}
          decay={decay.value}
          color="#9C2CD5"
          position={[0, 40, 0]}
        />
        <ambientLight intensity={7} />
        <group position={[0, 15.452, 0]} scale={[29.541, 0.336, 8.492]} rotation={[0, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008.geometry}
            material={materials["DESK-0"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_1.geometry}
            material={materials["CHAIR-0"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_2.geometry}
            material={materials["WHEEL-0"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_3.geometry}
            material={materials["WHEEL-CAP-0"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_4.geometry}
            material={materials["WHEEL-NUT-0"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_5.geometry}
            material={materials["CHAIR-LEGS-0"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_6.geometry}
            material={materials["CHAIR-COVER-0"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_7.geometry}
            material={materials["COMPUTER-0"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_8.geometry}
            material={materials["1COMPUTER-0"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_9.geometry}
            material={materials["SCREEN-0"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_10.geometry}
            material={materials["3PIC-0.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_11.geometry}
            material={materials["3PIC-0.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_12.geometry}
            material={materials["3PIC-0"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_13.geometry}
            material={materials["BASS-0"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_14.geometry}
            material={materials["SPEAKER-0"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_15.geometry}
            material={materials["2KB-0.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_16.geometry}
            material={materials["1KB-BASE-0.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_17.geometry}
            material={materials["1KEYS-0.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_18.geometry}
            material={materials["MOUSE-0"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_19.geometry}
            material={materials["MOUSEPAD-0"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_20.geometry}
            material={materials["LAPTOP-0"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_21.geometry}
            material={materials["1KB-BASE-0"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_22.geometry}
            material={materials["1KEYS-0"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_23.geometry}
            material={materials["SCREEN-0.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_24.geometry}
            material={materials["SIGN-0"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_25.geometry}
            material={materials["TAG-0"]}
          />
        </group>
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[200, 200]} />
          <MeshReflectorMaterial
            blur={[300, 30]}
            resolution={2048}
            mixBlur={0.4}
            mixStrength={10}
            roughness={1.5}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#202020"
            metalness={0.8}
          />
        </mesh>
      </group>
    </Center>

  );
};

useGLTF.preload("/ComputerModel.glb");

export default ComputerModel;