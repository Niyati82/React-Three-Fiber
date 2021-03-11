import React, { useRef } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'

function BackDrop() {
  return (
    <mesh receiveShadow position={[0, -1, -5]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
}

export default BackDrop
