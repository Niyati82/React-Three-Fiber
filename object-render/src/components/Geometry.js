import React, { useRef } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { Physics, useSphere, usePlane } from 'cannon'

function GroundPlane() {
  return (
    <mesh receiveShadow rotation={[5, 0, 0]} position={[0, -1, 0]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
}

export default GroundPlane
