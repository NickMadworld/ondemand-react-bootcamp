import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner.component";
import { useProductCategories } from "../../utils/hooks/useProductCategories";
import { useProductList } from "../../utils/hooks/useProductList";
import Grid from "../../components/Grid/Grid.component";
import { Title } from "./Home.style";
import { OutlineButton, ButtonBox, ButtonContainer } from "../../Global.styles";
import {
  productCategoryToCard,
  featuredProductsToCard,
} from "../../utils/functions/mapper";

export default function MainView() {
  const [pageCategory, setPageCategory] = useState(0);
  const [pageProduct, setPageProduct] = useState(0);
  const productCategories = useProductCategories(pageCategory);
  const productList = useProductList(pageProduct);

  const [actualCategoryPage, GridCategory] = Grid({
    data: productCategoryToCard(productCategories.data),
    size: productCategories.data.total_pages,
  });

  const [actualProductPage, GridProduct] = Grid({
    data: featuredProductsToCard(productList.data),
    size: productList.data.total_pages,
  });

  useEffect(() => {
    setPageCategory(actualCategoryPage);
  }, [actualCategoryPage]);

  useEffect(() => {
    setPageProduct(actualProductPage + 1);
  }, [actualProductPage]);

  return (
    <>
      <Title> Product Categories - Grid</Title>
      {productCategories.isLoading ? <LoadingSpinner /> : <GridCategory />}

      <Title> Featured Products - Grid</Title>
      {productList.isLoading ? <LoadingSpinner /> : <GridProduct />}

      <ButtonBox>
        <ButtonContainer>
          <OutlineButton>
            <Link to="/products">View All Products</Link>
          </OutlineButton>
        </ButtonContainer>
      </ButtonBox>
    </>
  );
}
