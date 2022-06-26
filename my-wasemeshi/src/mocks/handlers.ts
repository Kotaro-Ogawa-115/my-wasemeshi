import { rest } from 'msw'
import mockShopInfoList from './resolvers/mockShopInfoList'
import mockShopDetail1 from './resolvers/mockShopDetail1'
import mockShopDetail2 from './resolvers/mockShopDetail2'
import mockShopDetail3 from './resolvers/mockShopDetail3'

const handlers = [
  rest.get('/getShopLists', mockShopInfoList),
  rest.get('/getShopDetail/1', mockShopDetail1),
  rest.get('/getShopDetail/2', mockShopDetail2),
  rest.get('/getShopDetail/3', mockShopDetail3)
]

export default handlers
