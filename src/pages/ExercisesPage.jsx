import { useState } from "react";
import SearchedExercises from "../components/SearchedExercises";
import Exercises from "../components/Exercises";
import Feature from "../components/Feature";

const ExercisesPage = () => {
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
