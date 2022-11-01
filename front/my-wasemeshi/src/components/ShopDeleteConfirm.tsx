import { Typography, Grid, Button } from "@material-ui/core";
import React from "react";
import { Link, useParams } from "react-router-dom";
import useDeleteShop from "../hooks/useDeleteShop";
import useGetShopDetail from "../hooks/useGetShopDetail";
import Loading from "./Loading";

const ShopConfirmDelete: React.FC = () => {
  const { deleteShop } = useDeleteShop();
  const { shopId } = useParams();
  const shopDetail = useGetShopDetail(shopId);

  if (shopDetail !== null) {
    return (
      <Grid container>
        <Grid sm={2} />
        <Grid lg={8} sm={8} style={{ margin: 32 }}>
          以下の店舗情報を削除します。よろしいですか？
          <Typography variant="h6" component="h2" gutterBottom>
            {shopDetail.shopName}
          </Typography>
          <Typography variant="subtitle1">
            住所：{shopDetail.address}
          </Typography>
          <Typography variant="subtitle1">
            電話番号：{shopDetail.tel}
          </Typography>
          <Typography variant="subtitle1">更新日：{shopDetail.date}</Typography>
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

export default ShopConfirmDelete;
