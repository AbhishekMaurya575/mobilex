import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Layout from "./components/Layout";
import Collections from "./Pages/Collections/Collections";
import ContactUs from "./Pages/Contactus/ContactUs";
import Catalog from "./Pages/Catalog/Catalog";
import Clearance from "./Pages/Clearance/Clearance";


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
      {path: "/contactus", element: <ContactUs/>},
      {path: "/catalog", element: <Catalog/>},
      {path: "clearance", element: <Clearance/>},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
