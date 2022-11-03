import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { shopDetailType } from "../type/shopDetailType";

const useDeleteShop = () => {
  const navigate = useNavigate();

  const deleteShop = async (shopId: string | undefined) => {
    const response = await axios
      .post(`http://localhost:3000/delete/${shopId}`)
      .catch((err) => {
        return err.response;
      });

    navigate("/", { state: response.statusText });
  };

  return { deleteShop };
};

export default useDeleteShop;
