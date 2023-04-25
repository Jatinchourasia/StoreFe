import React from "react";
import "./List.scss";
// import Card from "../Card/Card";
// import useFetch from "../../hooks/useFetch";
import { Card } from "./../Card/Card";

const List = ({ subCats, maxPrice, sort, catId, data }) => {
  //   const { data, loading, error } = useFetch(
  //     `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
  //       (item) => `&[filters][sub_categories][id][$eq]=${item}`
  //     )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  //   );

  return (
    <div className="list">
      {data?.collections?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
