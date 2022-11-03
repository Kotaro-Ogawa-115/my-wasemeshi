import { Typography, Grid, Button } from "@material-ui/core";
import React from "react";
import { Link, useParams } from "react-router-dom";
import useSWR from "swr";
import useDeleteShop from "../hooks/useDeleteShop";
import { shopDetailType } from "../type/shopDetailType";
import { fetcher } from "../utils/fetcher";
import Loading from "./Loading";

const ShopConfirmDelete: React.FC = () => {
  const { deleteShop } = useDeleteShop();
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
        以下の店舗情報を削除します。よろしいですか？
        <Typography variant="h6" component="h2" gutterBottom>
          {data.shopName}
        </Typography>
        <Typography variant="subtitle1">住所：{data.address}</Typography>
        <Typography variant="subtitle1">電話番号：{data.tel}</Typography>
        <Typography variant="subtitle1">更新日：{data.date}</Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => deleteShop(shopId)}
        >
          削除
        </Button>
        <Link to={"/shop-info/" + shopId} style={{ textDecoration: "none" }}>
          <Button variant="contained">戻る</Button>
        </Link>
      </>
    );
  }
};

export default ShopConfirmDelete;
