import React, { Suspense, useState } from 'react'
//Three
import { Canvas } from '@react-three/fiber'
import { Loader, softShadows } from '@react-three/drei'
import Lights from './components/Three/lights'
import Floor from './components/Three/floor'
//Styles
import './assets/styles/App.scss'
//Model
import Chest from './components/Three/chest'
import Diamond from './components/Three/diamond_pickaxe'
// Chest UI Component
import ChestModal from './components/chestModal'

// Initiate softShadows
softShadows()

const App = () => {
  // State if chest is open
  const [open, setOpen] = useState(false)
  return (
    <>
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [-5, 4, 4], fov: 40 }}
      >
        <Lights />
        <Suspense fallback={null}>
          <Chest open={open} setOpen={setOpen} />
          <Diamond />
          <Floor />
        </Suspense>
      </Canvas>
      {/* Loading bar */}
      <Loader />
      <ChestModal open={open} setOpen={setOpen} />
    </>
  )
}

export default App
