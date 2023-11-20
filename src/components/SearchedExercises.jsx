import { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";

const SearchedExercises = ({ setExercises, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(bodyPartData);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises?limit=10000",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchedExercises);
      window.scrollTo({ top: 1000, behavior: "smooth" });
    }
  };
  return (
    <div className="p-4">
      <h1 className="text-3xl text-center font-bold my-7">
        Search for Exercises
      </h1>
      <div className="p-inputgroup flex-1 max-w-lg my-7 items-center justify-center mx-auto">
        <InputText
          placeholder="Serch Exercise"
          className="p-3 bg-gray "
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <Button
          icon="pi pi-search"
          label="Search"
          className="button h-12 hover:opacity-70"
          onClick={handleSearch}
        />
      </div>
      <div>
        <HorizontalScrollBar setBodyPart={setBodyPart} isBodyParts />
      </div>
    </div>
  );
};

export default SearchedExercises;
