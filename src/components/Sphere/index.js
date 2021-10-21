import { useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import { DoubleSide, TextureLoader } from "three";

const Sphere = ({ map }) => {
  const texture = useLoader(TextureLoader, map);
  const ref = useRef();
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[10, 64, 64]} />
      <meshBasicMaterial map={texture} side={DoubleSide} />
    </mesh>
  );
};

export default Sphere;
