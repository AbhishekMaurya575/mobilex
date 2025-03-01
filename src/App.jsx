import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./Pages/Home/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home/> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
