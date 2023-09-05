import React from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const productCategories = useProductCategories();
  const productList = useProductList();
  return (
    <>
      <Title> Product Categories - Grid</Title>
      {productCategories.isLoading ? (
        <LoadingSpinner />
      ) : (
        <Grid
          data={productCategoryToCard(productCategories.data)}
          update={useProductCategories}
        />
      )}

      <Title> Featured Products - Grid</Title>
      {productList.isLoading ? (
        <LoadingSpinner />
      ) : (
        <Grid data={featuredProductsToCard(productList.data)} />
      )}

      <ButtonBox>
        <ButtonContainer>
          <OutlineButton
            onClick={() => navigate("/products", { replace: true })}
          >
            View All Products
          </OutlineButton>
        </ButtonContainer>
      </ButtonBox>
    </>
  );
}
