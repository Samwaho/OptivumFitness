import img1 from "../assets/icons8-fitness-48 (1).png";
import img2 from "../assets/icons8-muscle-66.png";
import img3 from "../assets/icons8-cardio-exercises-64.png";
import img4 from "../assets/icons8-fitness-64 (2).png";
import img5 from "../assets/icons8-fitness-64 (3).png";
import img6 from "../assets/icons8-leg-48.png";
import img7 from "../assets/icons8-neck-48.png";
import img8 from "../assets/icons8-shoulders-48.png";
import img9 from "../assets/icons8-fitness-64 (5).png";
import img10 from "../assets/icons8-muscle-48.png";
import img11 from "../assets/icons8-fitness-64 (4).png";
export const bodyPartsData = {
  getBodyPartsData() {
    return [
      {
        id: 1,
        name: "All",
        image: img1,
      },
      {
        id: 2,
        name: "Back",
        image: img2,
      },
      {
        id: 3,
        name: "Cardio",
        image: img3,
      },
      {
        id: 4,
        name: "Chest",
        image: img4,
      },
      {
        id: 5,
        name: "Lower Arms",
        image: img5,
      },
      {
        id: 6,
        name: "Lower Legs",
        image: img6,
      },
      {
        id: 7,
        name: "Neck",
        image: img7,
      },
      {
        id: 8,
        name: "Shoulders",
        image: img8,
      },
      {
        id: 9,
        name: "Upper Arms",
        image: img9,
      },
      {
        id: 10,
        name: "Upper Legs",
        image: img10,
      },
      {
        id: 11,
        name: "Waist",
        image: img11,
      },
    ];
  },
  getBodyPartsDataSmall() {
    return Promise.resolve(this.getBodyPartsData().slice(0, 11));
  },
};
