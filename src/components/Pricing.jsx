import { Button } from "primereact/button";
import { CiCircleCheck } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Reveal from "../../Reveal";
const Pricing = () => {
  return (
    <section className="p-6">
      <Reveal>
        <h3 className="text-3xl font-bold text-center">Membership Plans</h3>
      </Reveal>
      <div className="flex flex-wrap items-center justify-center gap-7 mt-16">
        <Reveal>
          <div className="card_box">
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-3xl font-bold gradient-text mt-8">
                Ksh.500{" "}
                <span className="text-lg font-medium color-text-2 ">/day</span>
              </h3>
              <h4 className="text-xl font-bold">Daily Membership</h4>
              <div className="text-center flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <CiCircleCheck size={"1.3rem"} color="#f59115" />{" "}
                  <p className="text-lg font-lg">Access To aAll Facilities</p>
                </div>
                <div className="flex items-center gap-3">
                  <IoIosCloseCircleOutline size={"1.3rem"} color="#d6232c" />{" "}
                  <p className="text-lg font-lg">Free Personal Training</p>
                </div>
                <div className="flex items-center gap-3">
                  <CiCircleCheck size={"1.3rem"} color="#f59115" />{" "}
                  <p className="text-lg font-lg">Free Parking</p>
                </div>
                <div className="flex items-center gap-3">
                  <CiCircleCheck size={"1.3rem"} color="#f59115" />{" "}
                  <p className="text-lg font-lg">Free Wifi</p>
                </div>
                <div className="flex items-center gap-3">
                  <IoIosCloseCircleOutline size={"1.3rem"} color="#d6232c" />{" "}
                  <p className="text-lg font-lg">Free Gym Wear</p>
                </div>
              </div>
              <Button label="Get Plan" className="button w-64  mx-8" />
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="card_box">
            <span className="span"></span>
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-3xl gradient-text font-bold ml-14 mt-8">
                Ksh.1,500{" "}
                <span className="text-lg color-text-2 font-medium ">
                  /month
                </span>
              </h3>
              <h4 className="text-xl font-bold">Monthly Membership</h4>
              <div className="text-center flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <CiCircleCheck size={"1.3rem"} color="#f59115" />{" "}
                  <p className="text-lg font-lg">Access to all facilities</p>
                </div>
                <div className="flex items-center gap-3">
                  <CiCircleCheck size={"1.3rem"} color="#f59115" />{" "}
                  <p className="text-lg font-lg">Free Training</p>
                </div>
                <div className="flex items-center gap-3">
                  <CiCircleCheck size={"1.3rem"} color="#f59115" />{" "}
                  <p className="text-lg font-lg">Free Parking</p>
                </div>
                <div className="flex items-center gap-3">
                  <CiCircleCheck size={"1.3rem"} color="#f59115" />{" "}
                  <p className="text-lg font-lg">Free Wifi</p>
                </div>
                <div className="flex items-center gap-3">
                  <IoIosCloseCircleOutline size={"1.3rem"} color="#d6232c" />{" "}
                  <p className="text-lg font-lg">Free Gym Wear</p>
                </div>
              </div>
              <Button label="Get Plan" className="button w-64 mx-8" />
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="card_box">
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-3xl font-bold gradient-text mt-8">
                Ksh.20,000{" "}
                <span className="text-lg font-medium color-text-2 ">/year</span>
              </h3>
              <h4 className="text-xl font-bold">Yearly Membership</h4>
              <div className="text-center flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <CiCircleCheck size={"1.3rem"} color="#f59115" />{" "}
                  <p className="text-lg font-lg">Access to all facilities</p>
                </div>
                <div className="flex items-center gap-3">
                  <CiCircleCheck size={"1.3rem"} color="#f59115" />{" "}
                  <p className="text-lg font-lg">Free Training</p>
                </div>
                <div className="flex items-center gap-3">
                  <CiCircleCheck size={"1.3rem"} color="#f59115" />{" "}
                  <p className="text-lg font-lg">Free Parking</p>
                </div>
                <div className="flex items-center gap-3">
                  <CiCircleCheck size={"1.3rem"} color="#f59115" />{" "}
                  <p className="text-lg font-lg">Free Wifi</p>
                </div>
                <div className="flex items-center gap-3">
                  <CiCircleCheck size={"1.3rem"} color="#f59115" />{" "}
                  <p className="text-lg font-lg">Free Gym Wear</p>
                </div>
              </div>
              <Button label="Get Plan" className="button w-64 mx-8" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Pricing;
