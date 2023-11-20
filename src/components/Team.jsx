import React from "react";
import img1 from "../assets/teamImg1.jpg";
import img2 from "../assets/teamImg2.jpg";
import img3 from "../assets/teamImg3.jpg";
import img4 from "../assets/teamImg4.jpg";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Team = () => {
  return (
    <section className="p-6 md:p-10">
      <div className="mx-auto max-w-screen-xl lg:px-6 ">
        <div className="flex flex-col gap-2 max-w-screen-sm mb-8 lg:mb-16">
          <p className="color-text">Trainers</p>
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
            Our Trainers
          </h2>
          <p className="font-light sm:text-xl">
            Meet our dynamic team of fitness experts, committed to helping you
            reach your goals. Passionate, knowledgeable, and dedicated, our
            trainers are here to guide and motivate you.
          </p>
        </div>
        <div className="grid gap-10 mb-6 lg:mb-16 md:grid-cols-2">
          <div className="items-center bg-gray rounded-lg box-shadow sm:flex">
            <a href="#">
              <img
                className=" object-cover rounded-lg sm:rounded-none sm:rounded-l-lg"
                src={img1}
                alt="Bonnie Avatar"
                style={{ width: "600px", height: "250px" }}
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight gradient-text">
                <a href="#">Bonnie Green</a>
              </h3>
              <span className="">Head Trainer</span>
              <p className="mt-3 mb-4 font-light">
                Bonnie fuels the fitness strategy at our gym, steering the
                direction of our workouts and overall training approach.
              </p>
              <ul className="flex space-x-4 sm:mt-0">
                <li>
                  <a href="#" className="color-text">
                    <AiFillInstagram />
                  </a>
                </li>
                <li>
                  <a href="#" className="color-text">
                    <FaTiktok />
                  </a>
                </li>
                <li>
                  <a href="#" className="color-text">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="#" className="color-text">
                    <FaYoutube />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="items-center bg-gray rounded-lg box-shadow sm:flex">
            <a href="#">
              <img
                className=" object-cover rounded-lg sm:rounded-none sm:rounded-l-lg"
                src={img2}
                alt="Jese Avatar"
                style={{ width: "600px", height: "250px" }}
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight gradient-text">
                <a href="#">Jese Leos</a>
              </h3>
              <span className=""> Yoga & Mindfulness Coach</span>
              <p className="mt-3 mb-4 font-light ">
                As our Yoga & Mindfulness Coach, she crafts sessions that
                stretch not only your muscles but also your sense of inner peace
                and balance.
              </p>
              <ul className="flex space-x-4 sm:mt-0">
                <li>
                  <a href="#" className="color-text">
                    <AiFillInstagram />
                  </a>
                </li>
                <li>
                  <a href="#" className="color-text">
                    <FaTiktok />
                  </a>
                </li>
                <li>
                  <a href="#" className="color-text">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="#" className="color-text">
                    <FaYoutube />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="items-center bg-gray rounded-lg box-shadow sm:flex ">
            <a href="#">
              <img
                className=" object-cover rounded-lg sm:rounded-none sm:rounded-l-lg"
                src={img3}
                alt="Bonnie Avatar"
                style={{ width: "600px", height: "250px" }}
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight gradient-text">
                <a href="#">Michael Gough</a>
              </h3>
              <span className="">Personalized Training Guru</span>
              <p className="mt-3 mb-4 font-light">
                Michael is the maestro of personalized fitness. Crafting unique
                plans, he ensures your fitness journey aligns seamlessly with
                your goals and lifestyle.
              </p>
              <ul className="flex space-x-4 sm:mt-0">
                <li>
                  <a href="#" className="color-text">
                    <AiFillInstagram />
                  </a>
                </li>
                <li>
                  <a href="#" className="color-text">
                    <FaTiktok />
                  </a>
                </li>
                <li>
                  <a href="#" className="color-text">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="#" className="color-text">
                    <FaYoutube />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="items-center bg-gray rounded-lg box-shadow sm:flex ">
            <a href="#">
              <img
                className="object-cover rounded-lg sm:rounded-none sm:rounded-l-lg"
                src={img4}
                alt="Jese Avatar"
                style={{ width: "600px", height: "250px" }}
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight gradient-text">
                <a href="#">Lana Byrd</a>
              </h3>
              <span className="">Cardio pro</span>
              <p className="mt-3 mb-4 font-light ">
                Lanna rules our cardio domain with a smile. Her vibrant energy
                transforms every workout into a joyous calorie-burning
                adventure.
              </p>
              <ul className="flex space-x-4 sm:mt-0">
                <li>
                  <a href="#" className="color-text">
                    <AiFillInstagram />
                  </a>
                </li>
                <li>
                  <a href="#" className="color-text">
                    <FaTiktok />
                  </a>
                </li>
                <li>
                  <a href="#" className="color-text">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="#" className="color-text">
                    <FaYoutube />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
