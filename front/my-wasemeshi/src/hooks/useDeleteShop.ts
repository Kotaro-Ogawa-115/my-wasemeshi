import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { shopDetailType } from "../type/shopDetailType";

const useDeleteShop = () => {
  const navigate = useNavigate();

  const deleteShop = async (shopId: string | undefined) => {
    // TODO: thenメソッドの中で、postが成功した時だけリダイレクトしたい
    // ↑やろうとするとnavigate('/')が動かない、なんで？
    const response = await axios
      .post(`http://localhost:3000/delete/${shopId}`)
      .catch((err) => {
        return err.response;
      });

    navigate("/");
  };

  return { deleteShop };
};

export default useDeleteShop;
