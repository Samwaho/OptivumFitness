import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import Reveal from "../../Reveal";

const NewsLetter = () => {
  return (
    <section className="p-6 md:p-10">
      <div className=" mx-auto max-w-screen-xl">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <Reveal>
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
              Sign up for our newsletter
            </h2>
          </Reveal>
          <Reveal>
            <p className="mx-auto max-w-2xl font-light sm:text-xl">
              Stay up to date with the roadmap progress, announcements and
              exclusive discounts feel free to sign up with your email.
            </p>
          </Reveal>
          <form>
            <Reveal>
              <div className="items-center mx-auto space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                <div className="p-inputgroup flex-1 max-w-xl my-6 items-center justify-center mx-auto">
                  <InputText
                    placeholder="Subscribe for our News Letter"
                    className="p-3 bg-gray "
                    value={""}
                  />
                  <Button
                    label="Subscribe"
                    className="button h-12 hover:opacity-70"
                  />
                </div>
              </div>
            </Reveal>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
