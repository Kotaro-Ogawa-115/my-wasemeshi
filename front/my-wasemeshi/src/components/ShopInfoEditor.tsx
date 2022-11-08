import { Typography, Grid, TextField, Button } from "@material-ui/core";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Link, useLocation, useParams } from "react-router-dom";
import useUpdateShopDetail from "../hooks/useUpdateShopDetail";
import { isShopDetailType, shopDetailType } from "../type/shopDetailType";
import { CommonButton } from "./CommonButton";
import Loading from "./Loading";

const ShopInfoEditor: React.FC = () => {
  const { updateShopDetail } = useUpdateShopDetail();
  const { handleSubmit, control } = useForm<shopDetailType>();
  const { shopId } = useParams();
  const shopDetail = useLocation().state;
  const onSubmit: SubmitHandler<shopDetailType> = (data) =>
    updateShopDetail(shopId, data);

  if (isShopDetailType(shopDetail)) {
    return (
      <>
        <Typography variant="h4" component="h2" gutterBottom>
          店舗情報編集
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="shopName"
            defaultValue={shopDetail.shopName}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label={"店名"}
                defaultValue={shopDetail.shopName}
                style={{ display: "block", marginBottom: 16 }}
                fullWidth
              />
            )}
          />
          <Controller
            name="address"
            defaultValue={shopDetail.address}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label={"住所"}
                defaultValue={shopDetail.address}
                style={{ display: "block", marginBottom: 16 }}
                fullWidth
              />
            )}
          />
          <Controller
            name="tel"
            defaultValue={shopDetail.tel}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label={"電話番号"}
                defaultValue={shopDetail.tel}
                style={{ display: "block", marginBottom: 16 }}
                fullWidth
              />
            )}
          />
          <CommonButton type="submit" color="primary">
            更新
          </CommonButton>
          <Link to={"/shop-info/" + shopId} style={{ textDecoration: "none" }}>
            <CommonButton>戻る</CommonButton>
          </Link>
        </form>
      </>
    );
  } else {
    return <Loading />;
  }
};

export default ShopInfoEditor;
