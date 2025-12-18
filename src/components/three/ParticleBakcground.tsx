import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, PerspectiveCamera } from "@react-three/drei";
import { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";
import type { Particle } from "@/types/3dcomponents";

/* =====================
   INTERNAL 3D PARTS
   ===================== */

const FloatingParticles = () => {
  const count = 300;
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particles = useRef<Particle[]>([]);

  useEffect(() => {
    const temp: Particle[] = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        t: Math.random() * 100,
        factor: 20 + Math.random() * 100,
        speed: 0.01 + Math.random() / 200,
        xFactor: -50 + Math.random() * 100,
        yFactor: -50 + Math.random() * 100,
        zFactor: -50 + Math.random() * 100,
        mx: 0,
        my: 0,
      });
    }
    particles.current = temp;
  }, []);

  useFrame(() => {
    if (!mesh.current) return;

    particles.current.forEach((p, i) => {
      p.t += p.speed / 2;
      const s = Math.cos(p.t);

      dummy.position.set(
        p.xFactor + Math.cos(p.t) * p.factor * 0.1,
        p.yFactor + Math.sin(p.t) * p.factor * 0.1,
        p.zFactor + Math.cos(p.t) * p.factor * 0.1
      );

      dummy.scale.setScalar(s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();

      mesh.current!.setMatrixAt(i, dummy.matrix);
    });

    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <dodecahedronGeometry args={[0.2, 0]} />
      <meshPhongMaterial
        color="#fbbf24"
        emissive="#f59e0b"
        emissiveIntensity={0.5}
      />
    </instancedMesh>
  );
};

const ConnectingNodes = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    groupRef.current.rotation.z = clock.getElapsedTime() * 0.02;
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[4, 2, -5]}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#8b5cf6"
            wireframe
            transparent
            opacity={0.3}
          />
        </mesh>
        <mesh position={[-5, -2, -5]}>
          <icosahedronGeometry args={[1.5, 1]} />
          <meshStandardMaterial
            color="#8b5cf6"
            wireframe
            transparent
            opacity={0.2}
          />
        </mesh>
      </Float>
    </group>
  );
};

const BackgroundScene = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={75} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#fbbf24" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />

      <Stars radius={100} depth={50} count={5000} factor={4} fade />

      <FloatingParticles />
      <ConnectingNodes />
    </>
  );
};

/* =====================
   EXPORT PUBLIC API
   ===================== */

export const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-80">
      <Canvas>
        <BackgroundScene />
      </Canvas>
    </div>
  );
};
