/*
auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "react-three-fiber";
import { useGLTF } from "@react-three/drei/useGLTF";
import * as THREE from "three";
import { useSpring, a } from "react-spring/three";

//Chest open sound
import chestOpenSound from "../../assets/sound/open-chest.mp3";
const openChest = new Audio(chestOpenSound);

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "../../../coffre-minecraft.glb"
  );
  const actions = useRef();
  const [mixer] = useState(() => new THREE.AnimationMixer());
  useFrame((state, delta) => mixer.update(delta));
  useEffect(() => {
    actions.current = {
      ArmatureAction: mixer.clipAction(animations[0], group.current),
    };
    return () => animations.forEach((clip) => mixer.uncacheClip(clip));
  }, [animations, mixer]);

  // function for the chest open & audio
  const handleAnimation = () => {
    props.setOpen(!props.open);
    openChest.volume = 0.3;
    openChest.play();
  };

  // Chest open animation
  const chestOpen = useSpring({
    rotation: props.open ? [0, 0, 0] : [1.61, 0, 0],
    position: props.open ? [0, 0, 0] : [0, 0, 0],
  });

  return (
    <group onClick={handleAnimation} ref={group} {...props} dispose={null}>
      <a.group position={[0, -0.99, 0]} rotation={chestOpen.position}>
        <primitive object={nodes.Bone} />
        <a.primitive rotation={chestOpen.rotation} object={nodes.Bone001} />
        <skinnedMesh
          castShadow
          receiveShadow
          material={materials.Material}
          geometry={nodes.Cube.geometry}
          skeleton={nodes.Cube.skeleton}
        />
      </a.group>
    </group>
  );
}

useGLTF.preload("../../../coffre-minecraft.glb");
