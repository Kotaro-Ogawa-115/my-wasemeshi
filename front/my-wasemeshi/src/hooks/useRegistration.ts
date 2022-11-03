import axios from "axios";
import { useNavigate } from "react-router-dom";
import { shopDetailType } from "../type/shopDetailType";

const useRegistration = () => {
  const navigate = useNavigate();

  const registryShopDetail = async (shopDetail: shopDetailType) => {
    const response = await axios
      .post("http://localhost:3000/post", shopDetail)
      .catch((err) => {
        return err.response;
      });

    navigate("/", { state: response.statusText });
  };

  return { registryShopDetail };
};

export default useRegistration;
