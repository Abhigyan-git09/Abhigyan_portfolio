import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Tendril({ startY, radius, phaseOffset }: { startY: number, radius: number, phaseOffset: number }) {
  const pointsCount = 20;
  const length = 4;

  const line = useMemo(() => {
    const pts = new Float32Array(pointsCount * 3);
    for (let i = 0; i < pointsCount; i++) {
      pts[i * 3] = radius * Math.cos(phaseOffset);
      pts[i * 3 + 1] = startY - (i / pointsCount) * length;
      pts[i * 3 + 2] = radius * Math.sin(phaseOffset);
    }
    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(pts, 3));
    const mat = new THREE.LineBasicMaterial({ color: '#00ffd5', transparent: true, opacity: 0.3 });
    return new THREE.Line(geom, mat);
  }, [startY, radius, phaseOffset]);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const positions = line.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < pointsCount; i++) {
      const wave = Math.sin(time * 1.5 - i * 0.4 + phaseOffset) * 0.3 * (i / pointsCount);
      const idx = i * 3;
      positions[idx] = radius * Math.cos(phaseOffset) + wave;
      positions[idx + 2] = radius * Math.sin(phaseOffset) + wave;
    }
    line.geometry.attributes.position.needsUpdate = true;
  });

  return <primitive object={line} />;
}

function Jellyfish({ position, phase }: { position: [number, number, number], phase: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!groupRef.current || !meshRef.current) return;
    // Slow Y-axis rotation
    meshRef.current.rotation.y += 0.002;
    meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5 + phase) * 0.1;
    // Gentle floating sine wave on Y position
    groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8 + phase) * 0.3;
  });

  return (
    <group ref={groupRef} position={position}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshStandardMaterial 
          color="#003d4d" 
          emissive="#00ffd5" 
          emissiveIntensity={0.4} 
          transparent 
          opacity={0.7} 
          wireframe={false} 
        />
      </mesh>
      
      {/* 10 trailing tendrils */}
      {Array.from({ length: 10 }).map((_, i) => (
        <Tendril key={i} startY={-1} radius={1.2} phaseOffset={(Math.PI * 2 / 10) * i} />
      ))}
      
      <pointLight color="#00ffd5" intensity={2} distance={8} />
    </group>
  );
}

export function JellyfishScene() {
  return (
    <div className="absolute inset-0 z-[1] pointer-events-none">
      <Canvas frameloop="always" camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight color="#001a2e" intensity={0.5} />
        <Jellyfish position={[-4, 1, -2]} phase={0} />
        <Jellyfish position={[3, 0, -4]} phase={2} />
        <Jellyfish position={[0, -2, -1]} phase={4} />
      </Canvas>
    </div>
  );
}
