import Card from "../Card/Card.component";
import React from "react";
import { Cards } from "../Card/Card.style";
import Pagination from "../Pagination/Pagination.component";
export default function Grid({ data, size = 0 }) {
  const [actualPage, PaginationComponent] = Pagination(size);
  const GridCompomnent = () => (
    <>
      <Cards>
        {data.map((image) => (
          <Card
            id={image.id}
            key={image.key}
            name={image.name}
            description={image.description}
            image={image.image}
          />
        ))}
      </Cards>
      {size > 0 && <PaginationComponent />}
    </>
  );
  return [actualPage, GridCompomnent];
}
