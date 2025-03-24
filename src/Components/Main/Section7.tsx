import { YoutubePlayer } from "./YoutubePlayer";

export const Section7 = () => {
  return (
    <div className="bg-surface flex flex-col justify-center items-center">
      <h1 className="text-3xl font-serif text-primary text-center font-bold pt-4">
        Where Learning Has No Limits
      </h1>
      <div className="md:grid grid-cols-2 gap-10 items-center">
        <div className="transition-transform duration-300 hover:scale-105">
          <YoutubePlayer videoId="-X7okpS9Ufc" />
        </div>
        <p
          className="text-secondary text-lg w-[40vw] transition-all duration-300 hover:scale-105 cursor-pointer text-center"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, vero
          magnam. Ipsam, ut molestiae a voluptate error debitis fugiat ea!
          Corporis ipsa repudiandae deserunt voluptate? Nemo minus, incidunt
          commodi iure quibusdam sequi magnam quasi tempore distinctio dolorem
          repellat corporis beatae totam consequatur exercitationem facere odio
          quidem sed eligendi obcaecati deleniti.
        </p>
      </div>
    </div>
  );
};
