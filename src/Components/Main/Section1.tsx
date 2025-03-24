import image from "../../assets/clg2.jpg";

export const Section1 = () => {
  return (
    <div className="relative h-[100vh]">
      <p className="p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 white-text text-4xl font-extrabold bg-black/50 rounded-md text-center">
        Building a foundation of wisdom, strength, and character for a better
        tomorrow.
      </p>
      <img
        src={image}
        alt="image"
        className="w-full h-full rounded-lg shadow-md " 
      />
    </div>
  );
};
