import React from "react";
import { Grid } from "@material-ui/core";
import ShopCard from "./ShopCard";
import shopInfoType from "../type/shopInfoType";
import Loading from "./Loading";
import useGetShopInfoList from "../hooks/useGetShopInfoList";

const ShopList: React.FC = () => {
  const shopInfoList = useGetShopInfoList();

  if (shopInfoList !== null) {
    return (
      <Grid container>
        <Grid sm={2} />
        <Grid lg={8} sm={8} spacing={10}>
          <ul>
            {shopInfoList.map((shopInfoProps: shopInfoType, key: number) => (
              <ShopCard
                key={key}
                id={shopInfoProps.id}
                shopName={shopInfoProps.shopName}
                date={shopInfoProps.date}
              />
            ))}
          </ul>
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Grid container justify="center" alignItems="center">
        <Loading />
      </Grid>
    );
  }
};

export default ShopList;
