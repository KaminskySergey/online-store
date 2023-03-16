import { BrowserRouter, Routes, Route } from "react-router-dom";

import  HomePage  from "Pages/HomePage/HomePage";
import  NotFound  from "Pages/NotFound/NotFound";
import  ProductPage  from "Pages/ProductPage/ProductPage";
import  SharedLayout  from "./SharedLayout/SharedLayout";
import CategoriesPage from "Pages/CategoriesPage/CategoriesPage";

export const App = () => {

  


  return (
    <>
      <BrowserRouter basename="online-store">
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/categories/:categoryId" element={<CategoriesPage/>} />
            <Route path="/products/:productsId" element={<ProductPage/>} />
            <Route path="*" element={<NotFound />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
};


