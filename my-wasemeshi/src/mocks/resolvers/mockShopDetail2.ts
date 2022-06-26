import { ResponseResolver, MockedRequest, restContext } from 'msw'
import shopDetailType from '../../interface/shopDetailType'

const mockShopDetail: ResponseResolver<MockedRequest, typeof restContext> = (req, res, ctx) => {
  const shopDetail: shopDetailType = {
    shopName: '破壊的イノベーション',
    address: '〒123-4567 東京都新宿区1-2',
    tel: '0120-828-828',
    date: '2022-06-02'
  }

  return res(ctx.json(shopDetail))
}

export default mockShopDetail
