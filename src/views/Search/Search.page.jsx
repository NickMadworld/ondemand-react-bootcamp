import { useSearchTerm } from "../../utils/hooks/useSearchTerm";
import { useParams } from "react-router-dom";
import Grid from "../../components/Grid/Grid.component";
import React, { useState, useEffect } from "react";
import Loading from "../../components/LoadingSpinner/LoadingSpinner.component";
import { Content } from "./Search.style";
import { featuredProductsToCard } from "../../utils/functions/mapper";
export default function Search() {
  const { query } = useParams();
  const [pageProduct, setPageProduct] = useState(0);
  const products = useSearchTerm(query, pageProduct);
  const [actualProductPage, GridProduct] = Grid({
    data: featuredProductsToCard(products.data),
    size: products.data.total_pages,
  });
  useEffect(() => {
    setPageProduct(actualProductPage + 1);
  }, [actualProductPage]);
  return (
    <Content>
      {products.isLoading && <Loading />}
      {Object.keys(products.data).length > 0 && <GridProduct />}
    </Content>
  );
}
