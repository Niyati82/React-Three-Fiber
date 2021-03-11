import logo from './logo.svg';
import './App.css';

import { Sphere,Cube,Cylinder } from './components/Sphere'
import { KeyLight,FillLight,RimLight}  from './components/Light'
import BackDrop from './components/BackDrop'
import GroundPlane from './components/Geometry'
import CameraControls from './components/CameraControls'

import { Canvas, extend } from 'react-three-fiber'
import React, {useRef, useState, useCallback} from 'react'

import {v1 as uuidv1} from '../node_modules/uuid'

import "./style.css";

function App() {

  const ref = useRef()
  const [items, set] = useState([])    // Sphere
  const [cube, setCube] = useState([]) // Cube
  const [cylinder, setCylinder] = useState([]) // Cyliner

  const handleClick = useCallback(e => set(items => [...items, uuidv1()]), [])  // Generate Sphere
  const generateCube = useCallback(e => setCube(cube => [...cube, uuidv1()]), []) // Generate Cube
  const generateCylinder = useCallback(e => setCylinder(cylinder => [...cylinder, uuidv1()]), []) //Generate Cylinder

  return (
    <>
      <Canvas>

        <CameraControls />

        <BackDrop /> // Back stage component

        /* Three Point Lighting */
        <KeyLight brightness={5.6} color={"#d0c9ff"} />
        <FillLight brightness={2.6} color={"#bdc7ff"} />
        <RimLight brightness={54} color="#fff" />

        {items.map((key, index) => (
          <Sphere key={key} position={[Math.random()*0.4, Math.random()*0.5, 1]} />
        ))}

        {cube.map((key, index) => (
          <Cube key={key} position={[Math.random()*2, Math.random()*5, -1]} />
        ))}

        {cylinder.map((key, index) => (
          <Cylinder key={key} position={[Math.floor(Math.random() * Math.floor(4)), Math.random()*10, -3]} rotate= {[2, 5, 0]} />
        ))}

        <GroundPlane /> // Ground Plane component

      </Canvas>

      <button class="sphere" onClick={handleClick}>Sphere</button>
      <button class="cube" onClick={generateCube}>Cube</button>
      <button class="cylinder" onClick={generateCylinder}>Cylinder</button>
    </>
  )
}

export default App;
