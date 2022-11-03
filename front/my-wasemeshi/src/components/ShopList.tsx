import React from "react";
import { Grid } from "@material-ui/core";
import ShopCard from "./ShopCard";
import shopInfoType from "../type/shopInfoType";
import Loading from "./Loading";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import SnackBar from "./SnackBar";
import GridWrapper from "./GridWrapper";

const ShopList: React.FC = () => {
  const { data, error } = useSWR<shopInfoType[], Error>(
    "http://localhost:3000/getShopList",
    fetcher
  );

  if (data == undefined) {
    return <Loading />;
  } else {
    return (
      <>
        {data.map((shopInfoProps: shopInfoType, key: number) => (
          <ShopCard
            key={key}
            id={shopInfoProps.id}
            shopName={shopInfoProps.shopName}
            date={shopInfoProps.date}
          />
        ))}
        <SnackBar />
      </>
    );
  }
};

export default ShopList;
