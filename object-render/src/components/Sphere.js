import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { Physics, useSphere, usePlane } from 'cannon'

/* Sphere Geometry Component */
function Sphere(props){

  const mesh = useRef()

 // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x += 0.02
    mesh.current.rotation.y += 0.01
  })

    return (
      <mesh {...props} ref={mesh} castShadow>
        <sphereGeometry attach="geometry" args={[1, 16, 16]} />
        <meshStandardMaterial
          attach="material"
          color="white"
          transparent
          roughness={0.1}
          metalness={0.1}
        />
      </mesh>
    )
}

/* Cube Geometry Component */
function Cube(props){
  const mesh = useRef()

 // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x += 0.02
    mesh.current.rotation.y += 0.01
  })

    return (
      <mesh {...props} ref = {mesh} castShadow>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial
          attach="material"
          color="white"
          transparent
          roughness={0.1}
          metalness={0.1}
        />
      </mesh>
    )
}

/* Cylinder Geometry Component */
function Cylinder(props){

  const mesh = useRef()

 // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x += 0.02
    mesh.current.rotation.y += 0.01
  })
    return (
      <mesh {...props} ref={mesh} castShadow>
        <cylinderGeometry attach="geometry" args={[2, 2, 5, 16]} />
        <meshStandardMaterial
          attach="material"
          color="0xffff00"
          transparent
          roughness={0.1}
          metalness={0.1}
        />
      </mesh>
    )
}

export{
  Sphere,
  Cube,
  Cylinder
}
