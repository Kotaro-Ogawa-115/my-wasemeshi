import { useState, useEffect } from 'react'
import axios from 'axios'
import shopDetailType from '../interface/shopDetailType'

const useRegistration = () => {
  const [shopName, setShopName] = useState<string | null>(null)
  const [address, setAddress] = useState<string | null>(null)
  const [tel, setTel] = useState<string | null>(null)

  const getInputShopName = (event: React.ChangeEvent<HTMLInputElement>) => setShopName(event.target.value)

  const getInputAddress = (event: React.ChangeEvent<HTMLInputElement>) => setAddress(event.target.value)

  const getInputTel = (event: React.ChangeEvent<HTMLInputElement>) => setTel(event.target.value)

  const registryShopDetail = async() => {
    if(shopName !== null && address !== null && tel !== null){
      const shopDetail: shopDetailType = {
        shopName: shopName,
        address: address,
        tel: tel,
        date: new Date().toDateString()
      }

      try {
        // TODO: axiosって何？
        const response = await axios.post('http://localhost:3000/registration', shopDetail)
      } catch (err) {
        throw err
      }
    }
  }

  // useEffect(() => {
  //   const load = async (): Promise<void> => {
  //     try {
  //       if (shopId !== undefined) {
  //         const response = await fetch(`http://localhost:3000/getShopDetail/${shopId}`)

  //         if (await !response.ok) {
  //           throw new Error(`HTTP-Error: ${response.status}`)
  //         }

  //         const responseData: shopDetailType | null = (await response.json())
  //         if (!isShopDetail(responseData)) {
  //           throw new Error(`Response Invalid: ${JSON.stringify(responseData)}`)
  //         }

  //         setShopDetail(responseData)
  //       }
  //     } catch (err) {
  //       throw err
  //     }
  //   }
  //   void load()
  // }, [])
  return [getInputShopName, getInputAddress, getInputTel, registryShopDetail]
}

export default useRegistration
