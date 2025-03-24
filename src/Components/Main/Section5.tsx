import { Card } from "./Card";
import image1 from "../../assets/bg5.svg";
import image2 from "../../assets/bg3.webp";

export const Section5 = () => {
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

      <div className="md:grid grid-cols-2 gap-6 m-6">
        <Card
          title="More About Abc college"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit dolorem molestiae autem dolores quo aperiam, omnis reiciendis! Non vitae officia tenetur id ab consequuntur magni repudiandae labore porro dolore."
          image={image1}
        />

        <Card
          title="More About Abc college"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit dolorem molestiae autem dolores quo aperiam, omnis reiciendis! Non vitae officia tenetur id ab consequuntur magni repudiandae labore porro dolore."
          image={image2}
        />
      </div>
    </div>
  );
};
