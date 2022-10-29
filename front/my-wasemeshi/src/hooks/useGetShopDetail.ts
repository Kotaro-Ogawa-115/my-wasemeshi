import axios from 'axios'
import { useState, useEffect } from 'react'
import shopDetailType from '../interface/shopDetailType'

const isShopDetail = (params: unknown): params is shopDetailType => {
  const shopDetail = params as shopDetailType

  return (
    typeof shopDetail?.shopName === 'string' &&
    typeof shopDetail?.address === 'string' &&
    typeof shopDetail?.tel === 'string' &&
    typeof shopDetail?.date === 'string'
  )
}

const useGetShopDetail = (shopId: string | undefined) => {
  const [shopDetail, setShopDetail] = useState<shopDetailType | null>(null)

  useEffect(() => {
    const load = async (): Promise<void> => {
      try {
        if (shopId !== undefined) {
          const response = await axios(`http://localhost:3000/getShopDetail/${shopId}`)
          .catch((err) =>{
            return err.response
          })

          setShopDetail(await response.data)
        }
      } catch (err) {
        throw err
      }
    }
    void load()
  }, [])
  return shopDetail
}
export default useGetShopDetail
