import { Typography, Grid, Button } from '@material-ui/core'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useGetShopDetail from '../hooks/useGetShopDetail'
import Loading from './Loading'

const ShopInfo: React.FC = () => {
  const { shopId } = useParams()
  const shopDetail  = useGetShopDetail(shopId)

  if (shopDetail !== null) {
    return (
      <Grid container>
        <Grid sm={2} />
        <Grid lg={8} sm={8} style={{ margin: 32 }}>
          <Typography variant='h4' component='h2' gutterBottom>{shopDetail.shopName}</Typography>
          <Typography variant='subtitle1'>住所：{shopDetail.address}</Typography>
          <Typography variant='subtitle1'>電話番号：{shopDetail.tel}</Typography>
          <Typography variant='subtitle1'>更新日：{shopDetail.date}</Typography>
          <Link to={'/shop-info/edit/' + String(shopId)} state={ shopDetail } style={{ marginRight:8, textDecoration:'none' }}>
            <Button variant="contained">編集</Button>
          </Link>
          <Link to={'/'} style={{ textDecoration:'none' }}>
              <Button variant="contained">戻る</Button>
            </Link>
        </Grid>
      </Grid>
    )
  } else {
    return (
      <Grid container justify='center' alignItems='center'>
        <Loading />
      </Grid>
    )
  }
}

export default ShopInfo
