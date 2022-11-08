import { Typography, Grid, Button, TextField, Link } from "@material-ui/core";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import useRegistration from "../hooks/useRegistration";
import { shopDetailType } from "../type/shopDetailType";
import { CommonButton } from "./CommonButton";

const Registration: React.FC = () => {
  const { registryShopDetail } = useRegistration();
  const { handleSubmit, control } = useForm<shopDetailType>();
  const onSubmit: SubmitHandler<shopDetailType> = (data) =>
    registryShopDetail(data);

  return (
    <>
      <Typography variant="h4" component="h2" gutterBottom>
        新規登録
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="shopName"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label={"店名"}
              style={{ display: "block", marginBottom: 16 }}
              fullWidth
            />
          )}
        />
        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label={"住所"}
              style={{ display: "block", marginBottom: 16 }}
              fullWidth
            />
          )}
        />
        <Controller
          name="tel"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label={"電話番号"}
              style={{ display: "block", marginBottom: 48 }}
              fullWidth
            />
          )}
        />
        <CommonButton type="submit" color="primary">
          更新
        </CommonButton>
      </form>
    </>
  );
};

export default Registration;
