import { useState, useEffect } from "react";
import ExerciseCard from "./ExerciseCard";
import { Paginator } from "primereact/paginator";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import Reveal from "../../Reveal";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(9);

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
    window.scrollTo({ top: 1000, behavior: "smooth" });
  };
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises?limit=10000",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=10000`,
          exerciseOptions
        );
      }
      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, [bodyPart]);
  return (
    <div className="text-center mt-4">
      <div className="flex flex-wrap justify-center gap-7 mt-6">
        {exercises.slice(first, first + rows).map((exercise, index) => (
          <Reveal key={index}>
            <ExerciseCard exercise={exercise} />
          </Reveal>
        ))}
      </div>
      <Reveal>
        <Paginator
          first={first}
          rows={rows}
          totalRecords={exercises.length}
          onPageChange={onPageChange}
          className=" mt-8 font-bold bg-transparent"
        />
      </Reveal>
    </div>
  );
};

export default Exercises;
