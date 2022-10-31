import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {shopDetailType} from '../type/shopDetailType'

const useUpdateShopDetail = () => {

  const navigate = useNavigate()

  const updateShopDetail = async(shopId: string | undefined, shopDetail: shopDetailType) => {
      // TODO: thenメソッドの中で、postが成功した時だけリダイレクトしたい
      // ↑やろうとするとnavigate('/')が動かない、なんで？
      const response = await axios.post(`http://localhost:3000/update/${shopId}`, shopDetail)
        .catch((err) => {
          return err.response
        })

      console.log(response);

      navigate(`/shop-info/${shopId}`)
  }

  return {updateShopDetail}
}

export default useUpdateShopDetail
