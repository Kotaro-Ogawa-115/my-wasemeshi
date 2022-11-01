import axios from "axios";
import { useNavigate } from "react-router-dom";
import { shopDetailType } from "../type/shopDetailType";

const useRegistration = () => {
  const navigate = useNavigate();

  const registryShopDetail = async (shopDetail: shopDetailType) => {
    // TODO: thenメソッドの中で、postが成功した時だけリダイレクトしたい
    // ↑やろうとするとnavigate('/')が動かない、なんで？
    const response = await axios
      .post("http://localhost:3000/post", shopDetail)
      .catch((err) => {
        return err.response;
      });

    navigate("/");
  };

  return { registryShopDetail };
};

export default useRegistration;
