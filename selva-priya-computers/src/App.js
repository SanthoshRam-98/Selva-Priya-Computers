import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services/Services";
import RootLayout from "./pages/Root";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServiceDetailLayout from "./pages/Services/ServiceDetailLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> }, // Homepage
      { path: "/pricing", element: <Pricing /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/services", element: <Services /> }, // List of all services
      { path: "/services/:serviceId", element: <ServiceDetailLayout /> }, // Dynamic route for service details
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
