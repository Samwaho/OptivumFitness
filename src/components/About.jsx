import { BsBookmarkStarFill } from "react-icons/bs";
import { MdAccessTimeFilled } from "react-icons/md";
import { Button } from "primereact/button";
import img from "../assets/aboutImg.jpg";

const About = () => {
  return (
    <section id="about" className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:p-10">
        <div className="flex flex-col gap-5">
          <p className="color-text gradient-text">About Us</p>
          <h3 className="text-4xl font-semibold capitalize">
            We are one of the leading fitness centers in the world
          </h3>
          <img
            src={img}
            alt="image"
            className="w-96 h-72 object-cover box-shadow rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-5 mt-2 md:mt-10">
          <p className=" tracking-wide">
            Welcome to our cutting-edge gym and fitness facility! Experience the
            best of both worlds with our state-of-the-art equipment and
            motivating atmosphere in person, or join our dynamic online programs
            for fitness at your fingertips. Achieve your goals on your terms,
            anytime, anywhere.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col gap-4">
              <BsBookmarkStarFill className="color-text text-2xl" />
              <h4 className="text-lg font-bold">Expert Trainers</h4>
              <p>
                Learn from the best trainers in the industry and get the best
                real results.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <MdAccessTimeFilled className="color-text text-2xl" />
              <h4 className="text-lg font-bold">Flexible Schedule</h4>
              <p>
                Fit your workouts into your busy lifestyle with our on-demand
                tutorials.
              </p>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <Button label="Get Started" type="button" className="button" />
            <Button label="Sign In" type="button" className="button-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
