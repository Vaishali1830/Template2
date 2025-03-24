import { ThemeProvider } from "./Context/ThemeProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Template from "./Components/Template";
import { TemplateLayout } from "./Components/TemplateLayout";
import { ContactPage } from "./Components/Details/Contact";
import { AboutPage } from "./Components/Details/About";
import { CareersPage } from "./Components/Details/Career";
import { SchoolGallery } from "./Components/Details/Gallery";
import { SchoolSocials } from "./Components/Details/Socials";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <TemplateLayout />,
      children: [
        {
          path: "/",
          element: <Template />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "contact-us",
          element: <ContactPage />,
        },
        {
          path: "careers",
          element: <CareersPage />,
        },
        {
          path: "gallery",
          element: <SchoolGallery />,
        },
        {
          path: "socials",
          element: <SchoolSocials />,
        },
      ],
    },
  ]);

  return (
    <div>
      <ThemeProvider>
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
