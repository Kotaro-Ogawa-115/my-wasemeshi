import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import shopDetailType from '../interface/shopDetailType'

const useRegistration = () => {
  const [shopName, setShopName] = useState<string | null>(null)
  const [address, setAddress] = useState<string | null>(null)
  const [tel, setTel] = useState<string | null>(null)

  const getInputShopName = (event: React.ChangeEvent<HTMLInputElement>) => setShopName(event.target.value)

  const getInputAddress = (event: React.ChangeEvent<HTMLInputElement>) => setAddress(event.target.value)

  const getInputTel = (event: React.ChangeEvent<HTMLInputElement>) => setTel(event.target.value)

  const navigate = useNavigate()

  const registryShopDetail = (): void => {
    if(shopName !== null && address !== null && tel !== null){
      const shopDetail: shopDetailType = {
        shopName: shopName,
        address: address,
        tel: tel,
        date: new Date().toDateString()
      }

      const response = axios.post('http://localhost:3000/post', shopDetail)
        .catch(err => {
          return err.response
      })

      navigate('/')
    }
  }

  return [getInputShopName, getInputAddress, getInputTel, registryShopDetail]
}

export default useRegistration
