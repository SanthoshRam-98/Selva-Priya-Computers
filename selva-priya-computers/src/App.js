import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";
import RootLayout from "./pages/Root";
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
    ],
  },
]);
function App() {
  return <RouterProvider router={routes} />;
}

export default App;
