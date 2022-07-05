import { ResponseResolver, MockedRequest, restContext } from 'msw'
import shopDetailType from '../../interface/shopDetailType'

const mockShopDetail: ResponseResolver<MockedRequest, typeof restContext> = (req, res, ctx) => {
  const shopDetail: shopDetailType = {
    shopName: '中華屋C',
    address: '〒123-4567 東京都新宿区1-3',
    tel: '0952-32-2338',
    date: '2022-06-03'
  }

  return res(ctx.json(shopDetail))
}

export default mockShopDetail
