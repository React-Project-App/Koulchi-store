import { AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sweetpagination from "sweetpagination";
import { GetAllProduct } from "../../Actions/Poroducts";

import ProductsListe from "../../Components/ProductsListe";
import SideBar from "../../Components/SideBar/SideBar";

const Products = () => {
  const [currentPageData, setCurrentPageData] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllProduct());
  }, []);
  const Products = useSelector((state) => state.products);
  const FilterdProducts = useSelector((state) => state.Filter);
  const FilterCategorie = useSelector((state) => state.FilterCategorie);
  let prod = Products;
  if (FilterdProducts.length > 0) {
    prod = FilterdProducts;
  }
  if (FilterCategorie.length > 0) {
    prod = FilterCategorie;
  }
  return Products.length > 0 ? (
    <>
      <div className="container-fluid content">
        <div className="row mt-5 pt-5">
          <SideBar />
          <div className="row d-flex justify-content-center  col-12 mt-3">
            {currentPageData.map((product) => {
              return <ProductsListe product={product} key={product.id} />;
            })}
          </div>
        </div>
      </div>

      <Sweetpagination
        currentPageData={setCurrentPageData}
        dataPerPage={15}
        getData={prod}
        navigation={true}
      />
    </>
  ) : (
    <div className="d-flex justify-content-center align-items-center load">
      <div className="loader"></div>
    </div>
  );
};

export default Products;
