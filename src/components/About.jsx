import { BsBookmarkStarFill } from "react-icons/bs";
import { MdAccessTimeFilled } from "react-icons/md";
import { Button } from "primereact/button";
import img from "../assets/aboutImg.jpg";
import Reveal from "../../Reveal";

const About = () => {
  return (
    <section id="about" className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:p-10">
        <div className="flex flex-col gap-5">
          <Reveal>
            <p className="color-text gradient-text">About Us</p>
          </Reveal>
          <Reveal>
            <h3 className="text-4xl font-semibold capitalize">
              We are one of the leading fitness centers in the world
            </h3>
          </Reveal>
          <Reveal>
            <img
              src={img}
              alt="image"
              className="w-96 h-72 object-cover box-shadow rounded-xl"
            />
          </Reveal>
        </div>
        <div className="flex flex-col gap-5 mt-2 md:mt-10">
          <Reveal>
            <p className=" tracking-wide">
              Welcome to our cutting-edge gym and fitness facility! Experience
              the best of both worlds with our state-of-the-art equipment and
              motivating atmosphere in person, or join our dynamic online
              programs for fitness at your fingertips. Achieve your goals on
              your terms, anytime, anywhere.
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

export default About;
