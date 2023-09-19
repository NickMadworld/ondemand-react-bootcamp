import React, { useState, useEffect } from "react";
import { Content, Title } from "./ProductList.style";
import { BuildSidebar } from "../../components/Sidebar/Sidebar.component";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner.component";
import { filterProducts } from "../../utils/functions/mapper";
import { useProductCategories } from "../../utils/hooks/useProductCategories";
import { useProductList } from "../../utils/hooks/useProductList";
import Grid from "../../components/Grid/Grid.component";
export default function ProductList() {
  const categories = useProductCategories();
  const [sidebar, categoriesSelected] = BuildSidebar(categories.data);
  const [productPage, setProductPage] = useState(0);

  const allProducts = useProductList(productPage);
  const products = filterProducts(allProducts.data, categoriesSelected);

  const [actualProductPage, GridProduct] = Grid({
    data: products,
    size: allProducts.data.total_pages,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
    setProductPage(actualProductPage + 1);
  }, [actualProductPage]);
  return (
    <>
      {sidebar}
      <Content>
        <Title>This is the Product List Page</Title>
        {allProducts.isLoading ? <LoadingSpinner /> : <GridProduct />}
      </Content>
    </>
  );
}
