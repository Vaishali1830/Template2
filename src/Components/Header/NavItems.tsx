import React from "react";
import { Link } from "react-router-dom";

interface NavItemsProps {
  title: string;
  route: string;
}

export const NavItems: React.FC<NavItemsProps> = ({ title, route }) => {
  return (
    <div className="relative group">
      <Link to={route} className="text-primary">
        {title}
      </Link>
      <div className="mt-1">
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-200 transition-all duration-300 group-hover:w-full"></span>
      </div>
    </div>
  );
};
