import { useState, useEffect } from "react";
import { Paginator } from "primereact/paginator";
import ExerciseCard from "./ExerciseCard";

const Pagination = ({ exercises }) => {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(3);

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-10 mt-6">
        {exercises.slice(first, first + rows).map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </div>
      <Paginator
        first={first}
        rows={rows}
        totalRecords={exercises.length}
        onPageChange={onPageChange}
        className=" mt-4 font-bold bg-transparent"
      />
    </div>
  );
};

export default Pagination;
