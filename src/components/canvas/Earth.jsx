import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  return (
    <primitive object={earth.scene} scale={3} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const lightColor = theme === "light" ? "#ffffff" : "#444444";
  const backgroundColor = theme === "light" ? "#e0f7fa" : "#0a0a0a";

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={toggleTheme}
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          padding: "10px",
          backgroundColor: theme === "light" ? "#222" : "#eee",
          color: theme === "light" ? "#fff" : "#000",
          border: "none",
          cursor: "pointer",
        }}
      >
        Toggle Theme
      </button>
      <Canvas
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        style={{ background: backgroundColor }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <ambientLight intensity={0.5} color={lightColor} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color={lightColor} />
        <Suspense fallback={null}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default EarthCanvas;
