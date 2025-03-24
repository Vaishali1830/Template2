import { ListComp } from "./List";

export const Footer2 = () => {
  const ListData = [
    {
      title: "About",
      items: [
        "Accreditation",
        " Student",
        "Achievements",
        " Careers",
        "Contact",
      ],
    },
    {
        title: "Academics",
        items: [
          "Faculty",
          "Academics",
          "BA Program",
          "MA Program",
          "Experimental Learning",
        ],
      },
      {
        title: "Admissions & Aid",
        items: [
          "How to Apply",
          "Tuition & Financial Aid",
          "International Students",
        ],
      },
      {
        title: "Campus Life",
        items: [
          "Overview",
          "Residential Life",
          "Honor Code",
          "Parents",
          "Center for Ethical Living and Learning (ZCELL)",
        ],
      },
      {
        title: "Give",
        items: [
          "Ways to Give",
          "12000 Strong",
          "Legacy Giving",
          "Capital Projects",
          "Contact Advancement",
        ],
      },
      {
        title: "Resources",
        items: [
          "College Catalog",
          "Calendar",
          "Transcript Request",
          "Volunteer",
        ],
      },
  ];

  const Contacts = [
    {
        title: "510.356.4760",
        items: [
            "info@zaytuna.edu"
        ],
      },
      {
        title: "Administrative Office",
        items: [
          "2401 Le Conte Ave. Berkeley, CA 94709",
        ],
      },
      {
        title: "Lower Campus",
        items: [
          "1712 Euclid Ave. Berkeley, CA 94709"
        ],
      },
      {
        title: "Upper Campus",
        items: [
          "2770 Marin Ave. Berkeley, CA 94708"
        ],
      },
  ]
  return (
    <div className="bg-surface w-full">
      {/* header */}
      <div className="flex justify-between p-6">
        <h1 className="text-3xl font-serif text-primary font-bold">
          Abc School
        </h1>
        <div className="flex gap-6 justify-center items-center">
          <p className="text-secondary">Get Abc News Delivered to Your Inbox</p>
          <button className="btn-primary">Sign Up for Emails</button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="border-b-2 border-color p-2 w-[95vw]"></div>
      </div>

      {/* main */}
      <div>
        <ListComp ListData = {ListData}/>
      </div>
      <div className="flex justify-center items-center">
        <div className="border-b-2 border-color p-2 w-[95vw]"></div>
      </div>
      <div className="">
        <ListComp ListData = {Contacts}/>
      </div>
      <div className="flex justify-center items-center">
        <div className="border-b-2 border-color p-2 w-[95vw]"></div>
      </div>

      <div className="flex flex-col md:flex-row justify-between p-10 pt-4 text-center text-sm pb-5">
        <p>&copy; 2025 Abc School, All Rights Reserved.</p>
        <p>
          Powered by <a href="https://morweb.org" className="underline">Morweb.org</a>
        </p>
      </div>
    </div>
  );
};
