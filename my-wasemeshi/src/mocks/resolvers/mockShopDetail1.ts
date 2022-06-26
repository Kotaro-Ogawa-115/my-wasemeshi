import { ResponseResolver, MockedRequest, restContext } from 'msw'
import shopDetailType from '../../interface/shopDetailType'

const mockShopDetail: ResponseResolver<MockedRequest, typeof restContext> = (req, res, ctx) => {
  const shopDetail: shopDetailType = {
    shopName: 'ピコピコポン',
    address: '〒123-4567 東京都新宿区早稲田南町45-7',
    tel: '012-3456-7890',
    date: '2022-06-01'
  }

  return res(ctx.json(shopDetail))
}

export default mockShopDetail
