import LinkComponent from "./LinkComponent";
import logo from "../../assets/logo2.jpg";
import { ThemeToggle } from "./ToggleTheme";
import { NavItems } from "./NavItems";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const links = [
    {
      title: "About",
      route: "/about",
    },
    {
      title: "Contact Us",
      route: "/contact-us",
    },
    {
      title: "Careers",
      route: "/careers",
    },
    {
      title: "Gallery",
      route: "/gallery",
    },
    {
      title: "Socials",
      route: "/socials",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-[100vw]">
      {/* Header 1 */}
      <div className="bg-primary flex gap-8 justify-center h-8 items-center">
        {links.map((link, index) => (
          <div key={index}>
            <LinkComponent
              title={link.title}
              route={link.route}
            ></LinkComponent>
          </div>
        ))}
      </div>

      {/* Header 2 */}

      <div className="flex justify-between bg-surface shadow-xl">
        <div className="flex p-2 justify-center items-center">
          <Link to="/">
            <img
              src={logo}
              alt="School logo"
              className="h-15 w-15 rounded-full"
            />
          </Link>

          <Link to="/">
            <h1 className="text-primary text-2xl font-bold ml-4 font-serif">
              Abc School
            </h1>
          </Link>
        </div>

        <div className="hidden md:flex items-center justify-center gap-4 mr-6">
          <ThemeToggle />
          <NavItems title="About" route="/about"></NavItems>
          <NavItems title="Academics" route="/academics"></NavItems>
          <NavItems title="Campus Life" route="/campus-life"></NavItems>
          <button className="btn-primary">Apply</button>
        </div>

        <div className="relative md:hidden flex items-center justify-center gap-4 m-5">
          <ThemeToggle />
          <FiMenu
            onClick={handleToggleMenu}
            className="cursor-pointer text-2xl"
          />
          {isMenuOpen && (
            <div className="absolute top-full mt-5 mr-3 flex flex-col gap-3 bg-surface shadow-lg p-3 rounded-lg border border-color w-30">
              <NavItems title="About" route="/about" />
              <NavItems title="Academics" route="/academics" />
              <NavItems title="Campus Life" route="/campus-life" />
              <NavItems title="Notice" route="/notice" />
              <NavItems title="Apply" route="/apply" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
