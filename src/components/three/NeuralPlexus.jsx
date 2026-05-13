import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Grid } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'

const COUNT = 100
const SPREAD_X = 12
const SPREAD_Y = 5
const SPREAD_Z = 5
const CONNECT_DIST_SQ = 2.8 * 2.8
const MAX_LINE_VERTS = COUNT * COUNT * 2 // worst case, each pair contributes 2 verts

function NeuralScene({ mouseRef }) {
  const pointsRef = useRef()
  const linesRef = useRef()

  const pos = useRef(new Float32Array(COUNT * 3))
  const vel = useRef(new Float32Array(COUNT * 3))
  const linePos = useRef(new Float32Array(MAX_LINE_VERTS * 3))

  useMemo(() => {
    for (let i = 0; i < COUNT; i++) {
      pos.current[i * 3]     = (Math.random() - 0.5) * SPREAD_X * 2
      pos.current[i * 3 + 1] = (Math.random() - 0.5) * SPREAD_Y * 2
      pos.current[i * 3 + 2] = (Math.random() - 0.5) * SPREAD_Z * 2
      vel.current[i * 3]     = (Math.random() - 0.5) * 0.007
      vel.current[i * 3 + 1] = (Math.random() - 0.5) * 0.007
      vel.current[i * 3 + 2] = (Math.random() - 0.5) * 0.007
    }
  }, [])

  const pointGeo = useMemo(() => {
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(pos.current, 3))
    return g
  }, [])

  const lineGeo = useMemo(() => {
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(linePos.current, 3))
    g.setDrawRange(0, 0)
    return g
  }, [])

  useFrame(({ camera }) => {
    const p = pos.current
    const v = vel.current
    const mx = mouseRef.current.x
    const my = mouseRef.current.y

    for (let i = 0; i < COUNT; i++) {
      p[i * 3]     += v[i * 3]
      p[i * 3 + 1] += v[i * 3 + 1]
      p[i * 3 + 2] += v[i * 3 + 2]

      p[i * 3]     += (mx * 5 - p[i * 3])     * 0.0003
      p[i * 3 + 1] += (my * 3 - p[i * 3 + 1]) * 0.0003

      if (p[i * 3]     >  SPREAD_X || p[i * 3]     < -SPREAD_X) v[i * 3]     *= -1
      if (p[i * 3 + 1] >  SPREAD_Y || p[i * 3 + 1] < -SPREAD_Y) v[i * 3 + 1] *= -1
      if (p[i * 3 + 2] >  SPREAD_Z || p[i * 3 + 2] < -SPREAD_Z) v[i * 3 + 2] *= -1
    }

    pointGeo.attributes.position.needsUpdate = true

    const lp = linePos.current
    let li = 0
    for (let i = 0; i < COUNT; i++) {
      for (let j = i + 1; j < COUNT; j++) {
        const dx = p[i * 3]     - p[j * 3]
        const dy = p[i * 3 + 1] - p[j * 3 + 1]
        const dz = p[i * 3 + 2] - p[j * 3 + 2]
        if (dx * dx + dy * dy + dz * dz < CONNECT_DIST_SQ) {
          lp[li++] = p[i * 3];     lp[li++] = p[i * 3 + 1]; lp[li++] = p[i * 3 + 2]
          lp[li++] = p[j * 3];     lp[li++] = p[j * 3 + 1]; lp[li++] = p[j * 3 + 2]
        }
      }
    }
    lineGeo.setDrawRange(0, li / 3)
    lineGeo.attributes.position.needsUpdate = true

    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      -window.scrollY * 0.002,
      0.05
    )
  })

  return (
    <>
      <points geometry={pointGeo}>
        <pointsMaterial
          color="#c084fc"
          size={0.07}
          sizeAttenuation
          transparent
          opacity={0.85}
        />
      </points>

      <lineSegments geometry={lineGeo}>
        <lineBasicMaterial color="#7c3aed" transparent opacity={0.3} />
      </lineSegments>

      <Grid
        position={[0, -5.5, 0]}
        args={[100, 100]}
        cellSize={1.2}
        cellThickness={0.4}
        cellColor="#4c1d95"
        sectionSize={6}
        sectionThickness={0.8}
        sectionColor="#7c3aed"
        fadeDistance={28}
        fadeStrength={1.5}
        infiniteGrid
      />

      <EffectComposer>
        <Bloom
          luminanceThreshold={0.05}
          luminanceSmoothing={0.9}
          intensity={1.2}
        />
      </EffectComposer>
    </>
  )
}

export function NeuralPlexus() {
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMouseMove = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth)  * 2 - 1
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 1.5]}
      >
        <NeuralScene mouseRef={mouseRef} />
      </Canvas>
    </div>
  )
}
