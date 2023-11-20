import { Button } from "primereact/button";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Link to={`/exercise/${exercise.id}`}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
          width: "320px",
          height: "450px",
        }}
        className="relative p-3 rounded-xl cursor-pointer bg-gray box-shadow hover:bg-slate-800 card mt-4"
      >
        <div
          className="p-3 absolute inset-2  flex flex-col items-center justify-center gap-3 rounded-lg bg-transparent"
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
        >
          <h3 className="text-lg text-centre color-text-3 mt-2  underline-offset-8 decoration-slate-300 capitalize font-bold">
            {exercise.name}
          </h3>
          <img
            className=" w-72 h-64 mt-2 rounded-lg bg-slate-50 shadow-sm"
            src={exercise.gifUrl}
            alt={exercise.name}
            loading="lazy"
          />
          <div className="p-2  flex items-center justify-around gap-4">
            <div className="flex flex-col gap-2 items-center">
              <h4 className="color-text-3 text-md font-semibold">
                Target Part
              </h4>
              <Button
                className="capitalize button p-1"
                style={{ width: "110px" }}
                label={exercise.bodyPart}
              ></Button>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <h4 className="color-text-3 text-md font-semibold">
                Target Muscle
              </h4>
              <Button
                className="capitalize button p-1 truncate"
                style={{ width: "110px" }}
                label={exercise.target}
              ></Button>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ExerciseCard;
