/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { scene } = useGLTF('/diamond.glb')
  return (
    <>
      <primitive object={scene} scale={[0.1, 0.1, 0.1]} />
    </>
  )
}

useGLTF.preload('/diamond.glb')
