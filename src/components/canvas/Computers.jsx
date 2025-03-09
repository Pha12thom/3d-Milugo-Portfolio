import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const { scene } = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* Adjust lighting for mobile */}
      <hemisphereLight intensity={isMobile ? 0.2 : 0.3} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.2}
        penumbra={1}
        intensity={isMobile ? 0.8 : 1.2} // Lower light intensity on mobile
        castShadow
        shadow-mapSize-width={512}
        shadow-mapSize-height={512}
      />
      <pointLight intensity={isMobile ? 0.6 : 1} />

      {/* Optimize model for mobile */}
      <primitive
        object={scene}
        scale={isMobile ? 0.6 : 0.75}
        position={isMobile ? [0, -3, -2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <Canvas
      shadows
      dpr={[1, isMobile ? 1.5 : 2]} // Lower DPI on mobile
      camera={{ position: [isMobile ? 10 : 20, 3, 5], fov: isMobile ? 30 : 25 }}
      gl={{ antialias: true }} // Remove `preserveDrawingBuffer`
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
