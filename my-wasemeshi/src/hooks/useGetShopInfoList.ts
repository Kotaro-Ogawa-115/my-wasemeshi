import { useState, useEffect } from 'react'
import shopInfoType from '../interface/shopInfoType'

const useGetShopInfoList = () => {
  const [shopInfoList, setShopInfoList] = useState<shopInfoType[] | null>(null)

  useEffect(() => {
    const load = async (): Promise<void> => {
      try {
        const response = await fetch('http://localhost:3000/getShopLists')

        if (await !response.ok) {
          throw new Error(`HTTP-Error: ${response.status}`)
        }

        const responseData: shopInfoType[] | null = (await response.json())

        setShopInfoList(responseData)
      } catch (err) {
        throw err
      }
    }
    void load()
  }, [])
  return shopInfoList
}
export default useGetShopInfoList
