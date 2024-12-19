// A visually appealing hero section with 3D animations.

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import styled from 'styled-components';

const HeroContainer = styled.div`
  height: 100vh;
  background: linear-gradient(135deg, #282c34, #61dafb);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroSection = () => {
  return (
    <HeroContainer id="hero">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <mesh>
          <torusGeometry args={[1, 0.4, 16, 100]} />
          <meshStandardMaterial color="orange" />
        </mesh>
        <OrbitControls />
      </Canvas>
    </HeroContainer>
  );
};

export default HeroSection;

