import { useSearchTerm } from "../../utils/hooks/useSearchTerm";
import { useParams } from "react-router-dom";
import Grid from "../../components/Grid/Grid.component";
import Loading from "../../components/LoadingSpinner/LoadingSpinner.component";
import { Content } from "./Search.style";
import { featuredProductsToCard } from "../../utils/functions/mapper";
export default function Search() {
  const { query } = useParams();
  const products = useSearchTerm(query);
  return (
    <Content>
      {products.isLoading && <Loading />}
      {Object.keys(products.data).length > 0 && (
        <Grid data={featuredProductsToCard(products.data)} />
      )}
    </Content>
  );
}
