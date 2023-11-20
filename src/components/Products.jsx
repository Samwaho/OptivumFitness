import { Button } from "primereact/button";
import img from "../assets/productsImg.jpg";
import Reveal from "../../Reveal";

const Products = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center p-6 mx-auto md:p-10">
      <div className="flex flex-col gap-2 ml-0 md:ml-6">
        <Reveal>
          <p className="color-text">Products</p>
        </Reveal>
        <Reveal>
          <h3 className="text-4xl font-bold mt-3">
            Achieve Your Fitness Goals with Our Products
          </h3>
        </Reveal>
        <Reveal>
          <p className="mt-6">
            Browse our selection of popular fitness products and start your
            fitness journey today. Whether you're looking to build muscle, lose
            weight, or improve your overall health, we have the right products
            for you.
          </p>
        </Reveal>
        <div className="flex gap-4 mt-8">
          <Reveal>
            <Button label="Shop" type="button" className="button" />
          </Reveal>
          <Reveal>
            <Button label="Join Us" type="button" className="button-2" />
          </Reveal>
        </div>
      </div>
      <Reveal>
        <img
          src={img}
          alt="Image"
          className=" h-72 object-cover box-shadow rounded-xl mt-8"
          style={{ width: "500px" }}
        />
      </Reveal>
    </section>
  );
};

export default Products;
