import { Typography, Grid, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import useSWR from "swr";
import { shopDetailType } from "../type/shopDetailType";
import { fetcher } from "../utils/fetcher";
import Loading from "./Loading";
import SnackBar from "./SnackBar";

const ShopInfo: React.FC = () => {
  const { shopId } = useParams();

  const { data, error } = useSWR<shopDetailType, Error>(
    `http://localhost:3000/getShopDetail/${shopId}`,
    fetcher
  );

  if (data === undefined) {
    return <Loading />;
  } else {
    return (
      <>
        <Typography variant="h4" component="h2" gutterBottom>
          {data.shopName}
        </Typography>
        <Typography variant="subtitle1">住所：{data.address}</Typography>
        <Typography variant="subtitle1">電話番号：{data.tel}</Typography>
        <Typography variant="subtitle1">更新日：{data.date}</Typography>
        <Link
          to={"/shop-info/edit/" + shopId}
          state={data}
          style={{ marginRight: 8, textDecoration: "none" }}
        >
          <Button variant="contained">編集</Button>
        </Link>
        <Link
          to={"/confirm-delete/" + shopId}
          style={{ marginRight: 8, textDecoration: "none" }}
        >
          <Button variant="contained" color="secondary">
            削除
          </Button>
        </Link>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Button variant="contained">戻る</Button>
        </Link>
        <SnackBar></SnackBar>
      </>
    );
  }
};

export default ShopInfo;
