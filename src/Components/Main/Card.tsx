interface CardProps {
  title: string;
  content: string;
  image: string;
}

export const Card: React.FC<CardProps> = ({ title, content, image }) => {
  return (
    <div className="mt-10 relative flex flex-col justify-center items-center">
      <img
        src={image}
        alt="image"
        className="h-[60vh] md:w-[90vw] w-[80vw] object-cover rounded-lg"
      />
      <h1 className="absolute top-5 white-text font-bold text-3xl font-serif px-4 py-2 rounded-md">
        {title}
      </h1>

      <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 white-text font-semibold text-lg px-6 py-4 rounded-md text-center">
        {content}
      </p>

      <div className="absolute bottom-10">
        <button className="btn-primary">
          LEARN MORE
        </button>
      </div>
    </div>
  );
};
