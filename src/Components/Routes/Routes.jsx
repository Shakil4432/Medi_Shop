import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import SignIn from "../SignInAndSignUp/SignIn/SignIn";
import SignUp from "../Shared/SignUp/SignUp";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Users from "../Pages/Dashboard/Users/Users";
import Category from "../Pages/Dashboard/Category/Category";
import ManageSellerMedicine from "../Pages/Dashboard/ManageSellerMedicine/ManageSellerMedicine";
import TableByCategory from "../Pages/Home/TableByCategory/TableByCategory";
import Carts from "../Pages/Carts/Carts";
import AdminRoutes from "./AdminRoutes/AdminRoutes";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import Shop from "../Pages/Shop/Shop";
import CheckoutPage from "../Pages/Dashboard/Payment/CheckoutPage";
import InvoicePage from "../Pages/Dashboard/Payment/InvoicePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/spacific-category/:name",
        element: <TableByCategory />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/cheakOut",
        element: <CheckoutPage />,
      },
      {
        path: "/invoice",
        element: <InvoicePage />,
      },
      {
        path: "/cart",
        element: (
          <PrivateRoutes>
            <Carts />
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "users",
        element: (
          <AdminRoutes>
            <Users></Users>
          </AdminRoutes>
        ),
      },
      {
        path: "category",
        element: (
          <AdminRoutes>
            <Category></Category>
          </AdminRoutes>
        ),
      },
      {
        path: "manageMedicines",
        element: <ManageSellerMedicine></ManageSellerMedicine>,
      },
    ],
  },
]);
