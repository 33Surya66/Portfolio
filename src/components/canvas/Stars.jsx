import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, Preload } from "@react-three/drei";
import styled from "styled-components";

const StyledCanvasWrapper = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  inset: 0;
`;

const FloatingCube = () => {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.x += delta / 2;
    ref.current.rotation.y += delta / 2;
  });

  return (
    // Update position here to move the cube, e.g., [1, 1, 0] to move it up and to the right
    <Box ref={ref} args={[0.5, 0.5, 0.5]} position={[1, 1, 0]}>
      <meshStandardMaterial color="#f272c8" />
    </Box>
  );
};

const StyledCubeCanvas = () => {
  return (
    <StyledCanvasWrapper>
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <FloatingCube />
        </Suspense>
        <Preload all />
      </Canvas>
    </StyledCanvasWrapper>
  );
};

export default StyledCubeCanvas;
