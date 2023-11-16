import { useFrame } from '@react-three/fiber'
import React, { useEffect, useRef, useState } from 'react'
import { easing } from 'maath'
const CameraRig = ({ children }) => {
  const [mouseOut, setMouseOut] = useState(false);
  const groupRef = useRef()
  useFrame((state, delta) => {
    if (mouseOut) {
      state.pointer.x = 0;
      state.pointer.y = 0;
    }
    easing.dampE(
      groupRef.current.rotation,
      [-state.pointer.y / 10, state.pointer.x / 3, 0],
      0.25,
      delta
    )
  })
  const handleMouseOut = () => { 
    setMouseOut(true)
  }
  const handleMouseOver = () => {
    setMouseOut(false)
  }
  useEffect(() => {
    window.addEventListener('mouseout', handleMouseOut)
    window.addEventListener('mouseover', handleMouseOver)
    return () => {
      window.removeEventListener('mouseout', handleMouseOut)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [mouseOut])
  return (
    <group ref={groupRef}>
      {children}
    </group>
  )
}

export default CameraRig
