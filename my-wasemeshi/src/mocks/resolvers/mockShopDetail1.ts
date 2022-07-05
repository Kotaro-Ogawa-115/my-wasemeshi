import { ResponseResolver, MockedRequest, restContext } from 'msw'
import shopDetailType from '../../interface/shopDetailType'

const mockShopDetail: ResponseResolver<MockedRequest, typeof restContext> = (req, res, ctx) => {
  const shopDetail: shopDetailType = {
    shopName: 'ラーメン屋A',
    address: '〒123-4567 東京都新宿区1-1',
    tel: '012-3456-7890',
    date: '2022-06-01'
  }

  return res(ctx.json(shopDetail))
}

export default mockShopDetail
