import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useSpring, animated } from '@react-spring/three'
import chestOpenSound from '../../assets/sound/open-chest.mp3'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/coffre-minecraft.glb')
  const openChest = new Audio(chestOpenSound)

  const handleAnimation = (e) => {
    props.setOpen(!props.open)
    openChest.volume = 0.3
    openChest.play()
    e.stopPropagation()
  }

  const openChestAnimation = useSpring({
    rotation: props.open ? [0, 0, 0] : [1.61, 0, 0],
    position: props.open ? [0, -1.5, 0] : [0, 0, 0],
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Armature" position={[0, -0.99, 0]}>
        <primitive object={nodes.Bone} />
        <animated.primitive
          rotation={openChestAnimation.rotation}
          object={nodes.Bone001}
        />
        <skinnedMesh
          onClick={(event) => handleAnimation(event)}
          geometry={nodes.Cube.geometry}
          material={materials.Material}
          skeleton={nodes.Cube.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/coffre-minecraft.glb')
