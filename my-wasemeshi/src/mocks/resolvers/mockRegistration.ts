import { ResponseResolver, MockedRequest, restContext } from 'msw'

const mockRegistration: ResponseResolver<MockedRequest, typeof restContext> = (req, res, ctx) => {
  console.log(req.body)
  return
}

export default mockRegistration
