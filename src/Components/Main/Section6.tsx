import { ImageCard } from "./ImageCard";
import pic1 from "../../assets/img1.jpg";
import pic2 from "../../assets/img2.jpg";
import pic3 from "../../assets/img3.jpg";

export const Section6 = () => {
  return (
    <div className="bg-surface mt-10 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-serif text-primary text-center font-bold pt-8">
        Where Learning Has No Limits
      </h1>
      <p className="text-primary text-xl pt-8 w-[70vw] text-center font-semibold">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
        quas optio, similique rerum mollitia corporis possimus accusantium magni
        dolorem inventore!
      </p>

      <div className="grid md:grid-cols-3 m-10 gap-20">
        <ImageCard
          image={pic1}
          title="Parent Mentoring"
          content="Abc School offers a monthly mentoring program for our current and former mothers called “Breakfast Club for the betterment of the organisation."
          btntext="LEARN MORE"
        />

        <ImageCard
          image={pic2}
          title="Parent Mentoring"
          content="Abc School offers a monthly mentoring program for our current and former mothers called “Breakfast Club for the betterment of the organisation."
          btntext="LEARN MORE"
        />

        <ImageCard
          image={pic3}
          title="Parent Mentoring"
          content="Abc School offers a monthly mentoring program for our current and former mothers called “Breakfast Club for the betterment of the organisation."
          btntext="LEARN MORE"
        />
      </div>
    </div>
  );
};
