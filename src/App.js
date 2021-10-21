import React, { useState, useMemo, Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Sphere from "./components/Sphere";
import fieldHdr from "./textures/ttrHdr.hdr";
import fieldJpg from "./textures/ttrJpg.jpg";

import "./App.css";

function App() {
  const [isCube, setIsCube] = useState(true);

  const changeMode = () => {
    const newMode = !isCube;
    setIsCube(newMode);
  };

  const mode = useMemo(() => {
    return isCube ? "cube" : "sphere";
  }, [isCube]);

  const map = useMemo(() => {
    return isCube ? fieldHdr : fieldJpg;
  }, [isCube]);

  return (
    <div className="wellcome">
      <div style={{ width: "100vw", height: "100vh" }}>
        <Suspense fallback={<> Loading </>}>
          <Canvas
            camera={{
              fov: 120,
            }}
          >
            {mode === "cube" ? (
              <Environment
                background={true}
                files={map}
                scene={undefined}
              ></Environment>
            ) : (
              <Sphere map={map} />
            )}

            <OrbitControls />
          </Canvas>
        </Suspense>
      </div>
      <button onClick={changeMode}>Switch</button>
    </div>
  );
}

export default App;
