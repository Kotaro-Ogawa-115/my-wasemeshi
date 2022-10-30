import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {shopDetailType} from '../type/shopDetailType'

const useUpdateShopDetail = () => {
  const [shopName, setShopName] = useState<string | undefined>(undefined)
  const [address, setAddress] = useState<string | undefined>(undefined)
  const [tel, setTel] = useState<string | undefined>(undefined)

  // 1文字入力するごとにこれ走ってるから絶対やばい、別の取得方法に変える
  const getInputShopName = (event: React.ChangeEvent<HTMLInputElement>) => setShopName(event.target.value)

  const getInputAddress = (event: React.ChangeEvent<HTMLInputElement>) => setAddress(event.target.value)

  const getInputTel = (event: React.ChangeEvent<HTMLInputElement>) => setTel(event.target.value)

  const navigate = useNavigate()

  const updateShopDetail = async(shopId: string | undefined) => {
    if(shopId !== undefined && shopName !== undefined && address !== undefined && tel !== undefined){
      const shopDetail = {
        shopName: shopName,
        address: address,
        tel: tel,
      }

      // TODO: thenメソッドの中で、postが成功した時だけリダイレクトしたい
      // ↑やろうとするとnavigate('/')が動かない、なんで？
      const response = await axios.post(`http://localhost:3000/update/${shopId}`, shopDetail)
        .catch((err) => {
          return err.response
        })

      console.log(response);

      navigate(`/shop-info/${shopId}`)
    }
  }

  return {getInputShopName, getInputAddress, getInputTel, updateShopDetail}
}

export default useUpdateShopDetail
