import { BsBookmarkStarFill } from "react-icons/bs";
import { MdAccessTimeFilled } from "react-icons/md";
import { Button } from "primereact/button";
import img from "../assets/featureImg.jpg";
import Reveal from "../../Reveal";

const Feature = () => {
  return (
    <section className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:p-10">
        <div className="flex flex-col gap-5">
          <Reveal>
            <p className="color-text">Transform</p>
          </Reveal>
          <Reveal>
            <h3 className="text-4xl font-semibold">
              Achieve Your Fitness Goals with Our Online Tutorials
            </h3>
          </Reveal>
          <Reveal>
            <img
              src={img}
              alt="image"
              className="w-96 h-72 object-cover rounded-xl"
            />
          </Reveal>
        </div>
        <div className="flex flex-col gap-5 mt-2 md:mt-10">
          <Reveal>
            <p className=" tracking-wide">
              Our online fitness tutorials provide you with expert guidance and
              personalized workouts to help you reach your fitness goals.
              Whether you're a beginner or an experienced fitness enthusiast,
              our tutorials are designed to challenge and motivate you.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col gap-4">
              <Reveal>
                <BsBookmarkStarFill className="color-text text-2xl" />
              </Reveal>
              <Reveal>
                <h4 className="text-lg font-bold">Expert Trainers</h4>
              </Reveal>
              <Reveal>
                <p>
                  Learn from the best trainers in the industry and get the best
                  real results.
                </p>
              </Reveal>
            </div>
            <div className="flex flex-col gap-4">
              <Reveal>
                <MdAccessTimeFilled className="color-text text-2xl" />
              </Reveal>
              <Reveal>
                <h4 className="text-lg font-bold">Flexible Schedule</h4>
              </Reveal>
              <Reveal>
                <p>
                  Fit your workouts into your busy lifestyle with our on-demand
                  tutorials.
                </p>
              </Reveal>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <Reveal>
              <Button label="Get Started" type="button" className="button" />
            </Reveal>
            <Reveal>
              <Button label="Sign In" type="button" className="button-2" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
