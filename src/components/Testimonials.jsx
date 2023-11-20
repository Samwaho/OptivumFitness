import React from "react";

const Testimonials = () => {
  return (
    <section className="p-6 md:p-10">
      <div className="px-4 mx-auto max-w-screen-xl">
        <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-4xl text-center tracking-tight font-extrabold">
            Testimonials
          </h2>
        </div>
        <div className="grid my-8 lg:mb-12 lg:grid-cols-2 gap-10">
          <figure className="flex flex-col p-6 bg-gray md:p-12 rounded-lg box-shadow">
            <blockquote className="mx-auto mb-8 max-w-2xl ">
              <h3 className="text-lg font-semibold gradient-text">
                Life-Changing Experience
              </h3>
              <p className="my-4">
                Joining this gym was a game-changer for me. The personalized
                training from Alex Morgan has transformed not only my physique
                but also my overall well-being. I can't thank Alex and the team
                enough!"
              </p>
            </blockquote>
            <figcaption className="flex items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium  text-left">
                <div className="color-text gradient-text">Bonnie Green</div>
                <div className="text-sm font-light ">Developer at Open AI</div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col p-8 bg-gray rounded-lg box-shadow md:p-12">
            <blockquote className="mx-0 md:mx-auto mb-8">
              <h3 className="text-lg font-semibold gradient-text">
                Empowering Workouts
              </h3>
              <p className="my-4">
                Bonnie Green's high-intensity workouts are nothing short of
                empowering. Her energy motivates me to push beyond my limits,
                and the results speak for themselves. This gym is my fitness
                sanctuary!"
              </p>
            </blockquote>
            <figcaption className="flex items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium  text-left">
                <div className="color-text gradient-text">Roberta Casas</div>
                <div className="text-sm font-light">
                  Lead designer at Dropbox
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col p-8 bg-gray box-shadow rounded-lg md:p-12 ">
            <blockquote className="mx-auto mb-8">
              <h3 className="text-lg font-semibold gradient-text">
                Strength Redefined
              </h3>
              <p className="my-4">
                "Mark Rodriguez is a strength wizard! His tailored strength
                training has redefined my fitness journey. I feel stronger, more
                confident, and ready to take on any challenge. Thank you, Mark!"
              </p>
            </blockquote>
            <figcaption className="flex items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium text-left">
                <div className="color-text gradient-text">Jese Leos</div>
                <div className="text-sm font-light">
                  Software Engineer at Facebook
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col p-8 bg-gray rounded-lg box-shadow md:p-12">
            <blockquote className="mx-auto mb-8 max-w-2xl ">
              <h3 className="text-lg font-semibold gradient-text">
                Mindfulness Matters
              </h3>
              <p className="my-4">
                "Emily Chang's yoga sessions have become my oasis of
                tranquility. In the chaos of daily life, her mindful approach
                has not only improved my flexibility but also brought a sense of
                calm I never knew I needed."
              </p>
            </blockquote>
            <figcaption className="flex items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium">
                <div className="color-text gradient-text">Joseph McFall</div>
                <div className="text-sm font-light">CTO at Google</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
