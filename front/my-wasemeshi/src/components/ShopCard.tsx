import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography } from "@material-ui/core";
import shopInfoType from "../type/shopInfoType";

const ShopCard: React.FC<shopInfoType> = (shop) => {
  const shopIdNum = shop.id;
  return (
    <Link
      to={"/shop-info/" + String(shopIdNum)}
      style={{ border: 0, textDecoration: "none" }}
    >
      <Card style={{ marginBottom: 16 }}>
        <CardContent>
          <Typography variant="h5">{shop.shopName}</Typography>
        </CardContent>
        <CardContent>更新日：{shop.date}</CardContent>
      </Card>
    </Link>
  );
};

export default ShopCard;
