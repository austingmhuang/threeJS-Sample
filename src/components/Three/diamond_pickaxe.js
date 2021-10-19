/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()

  const { nodes, materials } = useGLTF('/minecraft_diamond-pickaxe.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          position={[0, -5, 0]}
          scale={[0.11, 0.11, 0.11]}
          castShadow
          receiveShadow
          geometry={nodes.mesh_0.geometry}
          material={materials['Material.009']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/minecraft_diamond-pickaxe.glb')