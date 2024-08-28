// Sphere.tsx
import React from 'react';

interface SphereProps {
  src: string;
  left: string | number;
  top: string | number;
}

const Sphere: React.FC<SphereProps> = ({ src, left, top }) => {
  return (
    <div
      className="absolute"
      style={{ left: left, top: top }}
    >
      <img src={src} alt="Esfera de Decoração" />
    </div>
  );
}

export default Sphere;