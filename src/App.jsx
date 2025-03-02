import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Layout from "./components/Layout";
import Collections from "./Pages/Collections/Collections";
import ContactUs from "./Pages/Contactus/ContactUs";
import Catalog from "./Pages/Catalog/Catalog";
import Clearance from "./Pages/Clearance/Clearance";
import Wishlist from "./Pages/Wishlist/Wishlist";
import AccountPage from "./Pages/Accounts/Accounts";
import Cart from "./Pages/Carts/Carts";
import ProductDetail from "./Pages/Productdetails/Productdetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/collections", element: <Collections /> },
      { path: "/contactus", element: <ContactUs /> },
      { path: "/catalog", element: <Catalog /> },
      { path: "/clearance", element: <Clearance /> },
      { path: "/wishlist", element: <Wishlist /> },
      { path: "/account", element: <AccountPage /> },
      { path: "/cart", element: <Cart /> },
      { path: "/product/:productId", element: <ProductDetail/> }, // Product Detail Route
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
