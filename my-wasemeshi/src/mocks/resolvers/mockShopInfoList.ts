import { ResponseResolver, MockedRequest, restContext } from 'msw'
import shopInfoType from '../../interface/shopInfoType'

const mockShopInfoList: ResponseResolver<MockedRequest, typeof restContext> = (req, res, ctx) => {
  const shopInfo: shopInfoType[] = [
    { shopId: 1, shopName: 'ラーメン屋A', date: '2022-06-01' },
    { shopId: 2, shopName: '洋食屋B', date: '2022-06-02' },
    { shopId: 3, shopName: '中華屋C', date: '2022-06-03' }
  ]

  return res(ctx.json(shopInfo))
}

export default mockShopInfoList
