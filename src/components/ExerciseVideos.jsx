import { Button } from "primereact/button";
import Reveal from "../../Reveal";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <div className="mt-10 p-4">
      <Reveal>
        <h1 className="text-3xl font-bold ml-4 md:ml-24">
          Watch <span className="gradient-text capitalize">{name}</span>{" "}
          exercise videos
        </h1>
      </Reveal>
      <div className="flex flex-wrap items-center justify-center gap-10 mt-10">
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <Reveal>
            <a
              key={index}
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-start gap-4 w-80 bg-gray rounded-lg p-4 relative"
            >
              <img
                src={item.video.thumbnails[0].url}
                alt={item.video.title}
                className="rounded-lg"
              />
              <h3 className="text-start font-semibold">{item.video.title}</h3>
              <div className="flex items-center justify-between gap-2">
                <p className="text-start">{item.video.channelName}</p>
                <Button
                  label="Youtube"
                  icon="pi pi-youtube"
                  style={{ fontSize: "0.8rem" }}
                  className="button p-2 hover:opacity-80 absolute bottom-3 right-4"
                ></Button>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default ExerciseVideos;
