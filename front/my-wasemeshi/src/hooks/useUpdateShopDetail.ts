import axios from "axios";
import { useNavigate } from "react-router-dom";
import { shopDetailType } from "../type/shopDetailType";

const useUpdateShopDetail = () => {
  const navigate = useNavigate();

  const updateShopDetail = async (
    shopId: string | undefined,
    shopDetail: shopDetailType
  ) => {
    const response = await axios
      .post(`http://localhost:3000/update/${shopId}`, shopDetail)
      .catch((err) => {
        return err.response;
      });

    navigate(`/shop-info/${shopId}`, { state: response.statusText });
  };

  return { updateShopDetail };
};

export default useUpdateShopDetail;
