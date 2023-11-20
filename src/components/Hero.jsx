import BubbleEffect from "./BubbleText";
import heroImg from "../assets/heroImg.jpg";
import { Button } from "primereact/button";

const Hero = () => {
  return (
    <div className="flex items-center box-shadow">
      <div className="p-6 md:p-10 md:text-left flex align-items-center max-w-xl">
        <section>
          <BubbleEffect />

          <p className="my-10 text-700 line-height-3">
            Welcome to our premier fitness and gym center, where we provide
            top-notch training programs and state-of-the-art facilities to help
            you transform your body and improve your overall health. Join us
            today and start your fitness journey!
          </p>

          <Button label="Join us" type="button" className="mr-3 button" />
          <a href="/exercises">
            <Button label="Exercises" type="button" className="button-2" />
          </a>
        </section>
      </div>
      <div className="col-12 md:col-6 overflow-hidden">
        <img
          src={heroImg}
          alt="hero-1"
          className="md:ml-auto hidden lg:block md:h-full object-cover"
          style={{
            clipPath: "polygon(8% 0, 100% 0%, 100% 100%, 0 100%)",
            height: "90vh",
            width: "850px",
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
