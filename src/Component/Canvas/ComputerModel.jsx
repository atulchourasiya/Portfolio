import React, { useContext, useRef } from "react";
import { useGLTF, Center, MeshReflectorMaterial } from "@react-three/drei";
import { useFrame } from "react-three-fiber";
import { DissolveMaterial } from "./DissolveMaterial";
import { ModelContext } from "../Context/ModelState";

const ComputerModel = (props) => {
  const { nodes, materials } = useGLTF("/ComputerModel.glb");
  const groupRef = useRef();
  const { visible } = useContext(ModelContext);
  useFrame(() => {
    const scalingFactor = Math.min(Math.max(window.innerWidth / 768, .5), 1);
    groupRef.current.scale.set(scalingFactor, scalingFactor, scalingFactor);
  });

  return (
    <Center>
      <group ref={groupRef} position={[0, .5, 0]}  {...props} dispose={null} >
        <spotLight
          intensity={500}
          decay={1.6}
          color="#4C81F2"
          position={[0, 40, 0]}
        />
        <spotLight
          intensity={500}
          decay={1.6}
          color="#9C2CD5"
          position={[0, 40, 0]}
        />
        <ambientLight intensity={7} />
        <group position={[0, 15.452, 0]} scale={[29.541, 0.336, 8.492]} rotation={[0, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008.geometry}
          >
            <DissolveMaterial
              visible={visible}
              baseMaterial={materials["DESK-0"]}
              color="#00FFFF"
            />

          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_1.geometry}
          >
            <DissolveMaterial
              visible={visible}
              baseMaterial={materials["CHAIR-0"]}
              color="#00FFFF"
            />

          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_2.geometry}
          >
            <DissolveMaterial
              visible={visible}
              baseMaterial={materials["WHEEL-0"]}
              color="#00FFFF"
            />

          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_3.geometry}
          >
            <DissolveMaterial
              visible={visible}
              baseMaterial={materials["WHEEL-CAP-0"]}
              color="#00FFFF"
            />

          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_4.geometry}
          >
            <DissolveMaterial
              visible={visible}
              baseMaterial={materials["WHEEL-NUT-0"]}
              color="#00FFFF"
            />

          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_5.geometry}
          >
            <DissolveMaterial
              visible={visible}
              baseMaterial={materials["CHAIR-LEGS-0"]}
              color="#00FFFF"
            />

          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_6.geometry}
          >
            <DissolveMaterial
              visible={visible}
              baseMaterial={materials["CHAIR-COVER-0"]}
              color="#00FFFF"
            />

          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_7.geometry}
          >
            <DissolveMaterial
              visible={visible}
              baseMaterial={materials["COMPUTER-0"]}
              color="#00FFFF"
            />

          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_8.geometry}
          >
            <DissolveMaterial
              visible={visible}
              baseMaterial={materials["1COMPUTER-0"]}
              color="#00FFFF"
            />

          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_9.geometry}
          >
            <DissolveMaterial
              visible={visible}
              baseMaterial={materials["SCREEN-0"]}
              color="#00FFFF"
            />

          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_10.geometry}
          >
            <DissolveMaterial
              visible={visible}
              baseMaterial={materials["3PIC-0.003"]}
              color="#00FFFF"
            />

          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_11.geometry}
          >
            <DissolveMaterial
              visible={visible}
              baseMaterial={materials["3PIC-0.001"]}
              color="#00FFFF"
            />

          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_12.geometry}
          >
            <DissolveMaterial
              visible={visible}
              baseMaterial={materials["3PIC-0"]}
              color="#00FFFF"
            />

          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_13.geometry}
          >
            <DissolveMaterial
              visible={visible}
              baseMaterial={materials["BASS-0"]}
              color="#00FFFF"
            />

          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_14.geometry}
          >
            <DissolveMaterial
              visible={visible}
              baseMaterial={materials["SPEAKER-0"]}
              color="#00FFFF"
            />

          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_15.geometry}
          >
            <DissolveMaterial
              visible={visible}
              baseMaterial={materials["2KB-0.001"]}
              color="#00FFFF"
            />

          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_16.geometry}
          >
            <DissolveMaterial
              visible={visible}
              baseMaterial={materials["1KB-BASE-0.001"]}
              color="#00FFFF"
            />

          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_17.geometry}
          >
            <DissolveMaterial
              visible={visible}
              baseMaterial={materials["1KEYS-0.001"]}
              color="#00FFFF"
            />

          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_18.geometry}
          >
            <DissolveMaterial
              visible={visible}
              baseMaterial={materials["MOUSE-0"]}
              color="#00FFFF"
            />

          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_19.geometry}
          >
            <DissolveMaterial
              visible={visible}
              baseMaterial={materials["MOUSEPAD-0"]}
              color="#00FFFF"
            />

          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_20.geometry}
          >
            <DissolveMaterial
              visible={visible}
              baseMaterial={materials["LAPTOP-0"]}
              color="#00FFFF"
            />

          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_21.geometry}
          >
            <DissolveMaterial
              visible={visible}
              baseMaterial={materials["1KB-BASE-0"]}
              color="#00FFFF"
            />

          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_22.geometry}
          >
            <DissolveMaterial
              visible={visible}
              baseMaterial={materials["1KEYS-0"]}
              color="#00FFFF"
            />

          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_23.geometry}
          >
            <DissolveMaterial
              visible={visible}
              baseMaterial={materials["SCREEN-0.002"]}
              color="#00FFFF"
            />

          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_24.geometry}
          >
            <DissolveMaterial
              visible={visible}
              baseMaterial={materials["SIGN-0"]}
              color="#00FFFF"
            />

          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roundcube008_25.geometry}
          >
            <DissolveMaterial
              visible={visible}
              baseMaterial={materials["TAG-0"]}
              color="#00FFFF"
            />

          </mesh>
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