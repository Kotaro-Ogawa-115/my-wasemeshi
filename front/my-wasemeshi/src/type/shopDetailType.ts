export type shopDetailType = {
  shopName: string;
  address: string;
  tel: string;
  date: string;
};

export const isShopDetailType = (arg: any): arg is shopDetailType => {
  return (
    arg !== null &&
    typeof arg === "object" &&
    typeof arg.shopName === "string" &&
    typeof arg.address === "string" &&
    typeof arg.tel === "string" &&
    typeof arg.date === "string"
  );
};
