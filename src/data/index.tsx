import { Navigate } from "react-router-dom";
import Products from "../mainPages/Products";
import Pages from "../mainPages/Pages";
import PricePlans from "../mainPages/PricePlans";
import { IRoutes } from "./types";

export const routes: IRoutes[] = [
  {
    id: 1,
    path: "/",
    title: "Products",
    element: <Products />,
  },
  {
    id: 2,
    path: "/pages",
    title: "Pages",
    element: <Pages />,
  },
  {
    id: 3,
    path: "/pricePlans",
    title: "Price Plans",
    element: <PricePlans />,
  },
  {
    id: 4,
    path: "*",
    title: "",
    element: <Navigate to={"/"} />,
  },
];

export const selectValues = [
  {
    id: 1,
    value: "All",
  },
  {
    id: 2,
    value: "Active",
  },
  {
    id: 3,
    value: "Inactive",
  },
];

export const pagesLinks = [
  {
    id: 1,
    title: "Products",
    to: "/",
  },
  {
    id: 2,
    title: "Pages",
    to: "/pages",
  },
  {
    id: 3,
    title: "Price Plans",
    to: "/pricePlans",
  },
];
