import Pagination from "./Pagination";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <div className="mt-10">
      <div className="p-5">
        <h1 className="text-3xl font-bold ml-4 md:ml-24">
          Exercises that target the same muscle group
        </h1>
        <div className="flex flex-col gap-4">
          <Pagination exercises={targetMuscleExercises} />
        </div>
      </div>
      <div className="p-5">
        <h1 className="text-3xl font-bold ml-4 md:ml-24">
          Exercises that target the same equipments
        </h1>
        <div className="flex flex-col gap-4">
          <Pagination exercises={equipmentExercises} />
        </div>
      </div>
    </div>
  );
};

export default SimilarExercises;
