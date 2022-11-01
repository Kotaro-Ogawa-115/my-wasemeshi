import axios from "axios";
import { useState, useEffect } from "react";
import shopInfoType from "../type/shopInfoType";

const useGetShopInfoList = () => {
  const [shopInfoList, setShopInfoList] = useState<shopInfoType[] | null>(null);

  useEffect(() => {
    const load = async (): Promise<void> => {
      try {
        const response = await axios
          .get("http://localhost:3000/getShopList")
          .catch((err) => {
            return err.response;
          });
        setShopInfoList(await response.data);
      } catch (err) {
        throw err;
      }
    };
    void load();
  }, []);
  return shopInfoList;
};
export default useGetShopInfoList;
