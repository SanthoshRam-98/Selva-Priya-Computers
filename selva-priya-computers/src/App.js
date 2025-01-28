import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";
import RootLayout from "./pages/Root";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,

    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={routes} />;
}

export default App;
