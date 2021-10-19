/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { DragControls } from 'three/examples/jsm/controls/DragControls'
import { useThree, extend } from '@react-three/fiber'

extend({ DragControls })

export default function Model(props) {
  const drag = useRef()
  const orbit = useRef()
  const {
    camera,
    gl: { domElement },
  } = useThree()

  console.log('prettier')

  const { scene } = useGLTF('/minecraft_diamond-pickaxe.glb')
  useEffect(() => {
    if (drag.current) {
      const controls = drag.current
      const stopOrbit = () => (orbit.current.enabled = false)
      const startOrbit = () => (orbit.current.enabled = true)
      controls.addEventListener('dragstart', stopOrbit)
      controls.addEventListener('dragend', startOrbit)
    }
  })
  return (
    <>
      <primitive object={scene} scale={[0.05, 0.05, 0.05]} />
      <dragControls args={[[scene], camera, domElement]} ref={drag} />
      <OrbitControls ref={orbit} />
    </>
  )
}

useGLTF.preload('/minecraft_diamond-pickaxe.glb')
