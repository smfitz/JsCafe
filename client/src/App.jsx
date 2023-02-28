import { useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Home } from './components/Home'

function App() {
  return (
    <Canvas>
      <Home />
    </Canvas>
  )
}

export default App
