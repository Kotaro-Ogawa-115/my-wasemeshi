import axios from "axios";
import { useState, useEffect } from "react";
import { shopDetailType } from "../type/shopDetailType";

const useGetShopDetail = (shopId: string | undefined) => {
  const [shopDetail, setShopDetail] = useState<shopDetailType | null>(null);

  useEffect(() => {
    const load = async (): Promise<void> => {
      try {
        if (shopId !== undefined) {
          const response = await axios(
            `http://localhost:3000/getShopDetail/${shopId}`
          ).catch((err) => {
            return err.response;
          });

          setShopDetail(await response.data);
        }
      } catch (err) {
        throw err;
      }
    };
    void load();
  }, []);
  return shopDetail;
};
export default useGetShopDetail;
