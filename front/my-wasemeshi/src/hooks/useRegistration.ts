import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import shopDetailType from '../interface/shopDetailType'

const useRegistration = () => {
  const [shopName, setShopName] = useState<string | undefined>(undefined)
  const [address, setAddress] = useState<string | undefined>(undefined)
  const [tel, setTel] = useState<string | undefined>(undefined)

  const getInputShopName = (event: React.ChangeEvent<HTMLInputElement>) => setShopName(event.target.value)

  const getInputAddress = (event: React.ChangeEvent<HTMLInputElement>) => setAddress(event.target.value)

  const getInputTel = (event: React.ChangeEvent<HTMLInputElement>) => setTel(event.target.value)

  const navigate = useNavigate()

  const registryShopDetail = async() => {
    if(shopName !== undefined && address !== undefined && tel !== undefined){
      const shopDetail: shopDetailType = {
        shopName: shopName,
        address: address,
        tel: tel,
        date: new Date().toDateString()
      }

      // TODO: thenメソッドの中で、postが成功した時だけリダイレクトしたい
      // ↑やろうとするとnavigate('/')が動かない、なんで？
      const response = await axios.post('http://localhost:3000/post', shopDetail)
        .catch((err) => {
          return err.response
        })

      console.log(response);

      navigate('/')
    }
  }

  return [getInputShopName, getInputAddress, getInputTel, registryShopDetail] as const
}

export default useRegistration
