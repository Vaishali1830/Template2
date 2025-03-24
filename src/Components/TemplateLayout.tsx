import { Header } from "./Header/Header";
import { Outlet } from "react-router-dom";
import { Footer2 } from "./Footer/Footer2"

export const TemplateLayout = () => {
  return (
    <div>
      <div className="fixed top-0 z-50">
        <Header />
      </div>
      <div className="pt-25">
        <Outlet />
      </div>
      <Footer2/>
    </div>
  );
};
