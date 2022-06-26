import { ResponseResolver, MockedRequest, restContext } from 'msw'
import shopDetailType from '../../interface/shopDetailType'

const mockShopDetail: ResponseResolver<MockedRequest, typeof restContext> = (req, res, ctx) => {
  const shopDetail: shopDetailType = {
    shopName: '破壊的イノベーション',
    address: '〒849-0915 佐賀県佐賀市兵庫町藤木1201-76',
    tel: '0120-828-828',
    date: '2022-06-02'
  }

  return res(ctx.json(shopDetail))
}

export default mockShopDetail
