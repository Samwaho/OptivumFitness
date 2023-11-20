import Reveal from "../../Reveal";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      id: 1,
      icon: "Body Part",
      name: bodyPart,
    },
    {
      id: 2,
      icon: "Target Muscle",
      name: target,
    },
    {
      id: 3,
      icon: "Equipment",
      name: equipment,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-6 md:p-10 gap-20 mt-4">
      <div className="flex flex-col gap-4 p-0 md:p-5 ml-0 md:ml-10">
        <Reveal>
          <h3 className="text-5xl font-bold capitalize">{name}</h3>
        </Reveal>
        <Reveal>
          <p className="my-5 md:my-8 text-lg">
            Exercises are what your body needs to stay strong, young and
            healthy. <span className="capitalize">{name}</span> is one of the
            best exercises to target your {bodyPart}.
          </p>
        </Reveal>
        {extraDetail.map((item) => (
          <div key={item.id} className="grid grid-cols-2 items-center mt-4">
            <Reveal>
              <h3 className="color-text text-2xl gradient-text font-bold">
                {item.icon}:
              </h3>
            </Reveal>
            <Reveal>
              <h4 className="font-bold text-2xl capitalize">{item.name}</h4>
            </Reveal>
          </div>
        ))}
      </div>
      <img
        src={gifUrl}
        alt={name}
        loading="lazy"
        className="rounded-lg box-shadow mt-0 md:mt-14"
        style={{ width: "400px" }}
      />
    </div>
  );
};

export default Detail;
