import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'

const CORE_COUNT = 250

function fibonacciSphere(count) {
  const positions = new Float32Array(count * 3)
  const golden = Math.PI * (3 - Math.sqrt(5))
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2
    const r = Math.sqrt(1 - y * y)
    const theta = golden * i
    positions[i * 3]     = Math.cos(theta) * r
    positions[i * 3 + 1] = y
    positions[i * 3 + 2] = Math.sin(theta) * r
  }
  return positions
}

function Core({ scrollRef }) {
  const meshRef = useRef()
  const timeRef = useRef(0)

  const { geo, base } = useMemo(() => {
    const base = fibonacciSphere(CORE_COUNT)
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(base.slice(), 3))
    return { geo, base }
  }, [])

  useFrame(() => {
    timeRef.current += 0.008
    const t = timeRef.current
    const scroll = scrollRef.current

    const expandFactor = 1 + scroll * 0.0015
    const pulseFactor = 1 + Math.sin(t * 1.5) * 0.04

    const pos = geo.attributes.position.array
    for (let i = 0; i < CORE_COUNT; i++) {
      const noise = Math.sin(t * 2 + i * 0.7) * 0.06
      const r = expandFactor * pulseFactor + noise
      pos[i * 3]     = base[i * 3]     * r
      pos[i * 3 + 1] = base[i * 3 + 1] * r
      pos[i * 3 + 2] = base[i * 3 + 2] * r
    }
    geo.attributes.position.needsUpdate = true

    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.18
      meshRef.current.rotation.x = t * 0.09
    }
  })

  return (
    <points ref={meshRef} geometry={geo}>
      <pointsMaterial
        color="#e879f9"
        size={0.045}
        sizeAttenuation
        transparent
        opacity={0.9}
      />
    </points>
  )
}

function CoreRings() {
  const ring1Ref = useRef()
  const ring2Ref = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.3
      ring1Ref.current.rotation.z = t * 0.15
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = t * 0.25
      ring2Ref.current.rotation.z = -t * 0.2
    }
  })

  return (
    <>
      <mesh ref={ring1Ref}>
        <torusGeometry args={[1.05, 0.006, 8, 80]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.5} />
      </mesh>
      <mesh ref={ring2Ref}>
        <torusGeometry args={[1.2, 0.004, 8, 80]} />
        <meshBasicMaterial color="#7c3aed" transparent opacity={0.35} />
      </mesh>
    </>
  )
}

export function FloatingNeuralCore() {
  const scrollRef = useRef(0)

  useEffect(() => {
    const onScroll = () => { scrollRef.current = window.scrollY }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="neural-core-wrapper"
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '50%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 2.8], fov: 55 }}
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 1.5]}
      >
        <Core scrollRef={scrollRef} />
        <CoreRings />
        <EffectComposer>
          <Bloom
            luminanceThreshold={0}
            luminanceSmoothing={0.85}
            intensity={2.2}
          />
        </EffectComposer>
      </Canvas>
    </div>
  )
}
