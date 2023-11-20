import { useState } from "react";
import SearchedExercises from "../components/SearchedExercises";
import Exercises from "../components/Exercises";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "../utils/PerticleRingData";
import Feature from "../components/Feature";

const ExercisesPage = () => {
  const ParticleRing = () => {
    return (
      <div className="relative border-y-2 border-slate-700">
        <Canvas
          camera={{
            position: [4, -4.5, -5],
          }}
          style={{ height: "90vh" }}
          className="bg-transparent"
        >
          <OrbitControls maxDistance={20} minDistance={10} />
          <directionalLight />
          <pointLight position={[-30, 0, -30]} power={10.0} />
          <PointCircle />
        </Canvas>

        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"></div>
      </div>
    );
  };

  const PointCircle = () => {
    const ref = useRef(null);

    useFrame(({ clock }) => {
      if (ref.current?.rotation) {
        ref.current.rotation.z = clock.getElapsedTime() * 0.05;
      }
    });

    return (
      <group ref={ref}>
        {pointsInner.map((point) => (
          <Point
            key={point.idx}
            position={point.position}
            color={point.color}
          />
        ))}
        {pointsOuter.map((point) => (
          <Point
            key={point.idx}
            position={point.position}
            color={point.color}
          />
        ))}
      </group>
    );
  };

  const Point = ({ position, color }) => {
    return (
      <Sphere position={position} args={[0.1, 10, 10]}>
        <meshStandardMaterial
          emissive={color}
          emissiveIntensity={0.5}
          roughness={0.5}
          color={color}
        />
      </Sphere>
    );
  };
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <div>
      <Feature />
      <SearchedExercises
        setBodyPart={setBodyPart}
        setExercises={setExercises}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </div>
  );
};

export default ExercisesPage;
