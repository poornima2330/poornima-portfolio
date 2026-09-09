import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls, Sparkles } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function Core() {
  const group = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!group.current) return
    group.current.rotation.y = state.clock.elapsedTime * 0.12
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.08
  })

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.35, 2]} />
        <meshStandardMaterial
          color="#7dd3fc"
          wireframe
          transparent
          opacity={0.52}
          roughness={0.35}
          metalness={0.55}
        />
      </mesh>

      <mesh scale={0.66}>
        <icosahedronGeometry args={[1.35, 3]} />
        <meshStandardMaterial
          color="#67e8f9"
          emissive="#0e7490"
          emissiveIntensity={1.25}
          transparent
          opacity={0.22}
          roughness={0.18}
          metalness={0.7}
        />
      </mesh>

      {[
        [2.1, 0.2, 0.4],
        [-1.7, 1.2, 0.2],
        [0.4, -1.9, 0.9],
        [1.2, 1.7, -0.5],
        [-1.6, -1.2, -0.7],
      ].map((p, i) => (
        <Float key={i} speed={1.3 + i * 0.13} rotationIntensity={0.6} floatIntensity={0.9}>
          <mesh position={p as [number, number, number]} scale={0.13 + i * 0.012}>
            <sphereGeometry args={[1, 24, 24]} />
            <meshStandardMaterial color={i % 2 ? '#c4b5fd' : '#f0abfc'} emissive="#312e81" emissiveIntensity={0.9} />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 6.2], fov: 46 }} dpr={[1, 1.7]}>
      <ambientLight intensity={0.8} />
      <pointLight position={[4, 4, 5]} intensity={18} color="#7dd3fc" />
      <pointLight position={[-4, -2, 3]} intensity={10} color="#c4b5fd" />
      <Core />
      <Sparkles count={75} scale={[7, 6, 5]} size={1.8} speed={0.28} opacity={0.45} />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.42} />
    </Canvas>
  )
}
