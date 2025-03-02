import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Layout from "./components/Layout";
import Collections from "./Pages/Collections/Collections";
import ContactUs from "./Pages/Contactus/ContactUs";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      { index: true, element: <Home/> },
      {
        path: "/collections",
        element: <Collections/>,
      },
      {path: "/contact", element: <ContactUs/>},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
