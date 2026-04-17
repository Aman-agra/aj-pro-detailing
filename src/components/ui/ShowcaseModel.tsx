"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, PresentationControls, ContactShadows, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from 'three';

function CeramicShape() {
  const ref = useRef<THREE.Mesh>(null);
  
  // Use useMemo for geometry to prevent re-creation
  const geometry = useMemo(() => new THREE.SphereGeometry(1, 128, 128), []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if(ref.current) {
        ref.current.rotation.y = Math.sin(t / 4) / 2;
        ref.current.rotation.z = Math.sin(t / 2) / 4;
        ref.current.position.y = (Math.sin(t * 1.5) * 0.1) - 0.2;
    }
  });

  return (
    <mesh ref={ref} geometry={geometry} scale={1.8}>
      <MeshDistortMaterial
        color="#0a0a0a"
        envMapIntensity={2.5}
        clearcoat={1}
        clearcoatRoughness={0.05}
        metalness={0.9}
        roughness={0.1}
        distort={0.2}
        speed={1.5}
      />
    </mesh>
  );
}

export function ShowcaseModel() {
  return (
    <div className="w-full h-[600px] md:h-[800px] relative cursor-grab active:cursor-grabbing bg-gradient-to-t from-black to-[var(--bg-dark)]">
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={1} castShadow color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="var(--accent)" />
        
        <PresentationControls
          global
          snap
          config={{ mass: 2, tension: 500 }}
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
          <CeramicShape />
        </PresentationControls>

        <ContactShadows position={[0, -2, 0]} opacity={0.8} scale={15} blur={2.5} far={4} color="#000000" />
        <Environment preset="studio" />
      </Canvas>
      
      {/* Overlay UI */}
      <div className="absolute top-10 left-10 pointer-events-none">
        <h3 className="text-sm font-bold tracking-widest text-white/50 mb-2">INTERACTIVE DEMO</h3>
        <p className="text-2xl font-display font-black text-white glow-text">CERAMIC GLOSS SIMULATION</p>
      </div>
      
      <div className="absolute bottom-10 right-10 pointer-events-none text-right">
        <p className="text-xs uppercase tracking-widest text-white/40">Drag to interact</p>
      </div>
    </div>
  );
}
