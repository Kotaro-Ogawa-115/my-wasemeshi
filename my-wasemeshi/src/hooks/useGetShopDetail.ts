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
          const response = await fetch(`http://localhost:3000/getShopDetail/${shopId}`)

          if (await !response.ok) {
            throw new Error(`HTTP-Error: ${response.status}`)
          }

          const responseData: shopDetailType | null = (await response.json())
          if (!isShopDetail(responseData)) {
            throw new Error(`Response Invalid: ${JSON.stringify(responseData)}`)
          }

          setShopDetail(responseData)
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
