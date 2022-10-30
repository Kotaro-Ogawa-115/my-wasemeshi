import { Typography, Grid, TextField, Button } from '@material-ui/core'
import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import useUpdateShopDetail from '../hooks/useUpdateShopDetail'
import { isShopDetailType } from '../type/shopDetailType'
import Loading from './Loading'

const ShopInfoEditor: React.FC = () => {
  const {getInputShopName, getInputAddress, getInputTel, updateShopDetail} = useUpdateShopDetail()
  const { shopId } = useParams()
  const shopDetail = useLocation().state

  if (isShopDetailType(shopDetail)) {
    return (
      <Grid container>
        <Grid sm={2} />
        <Grid lg={8} sm={8} style={{ margin: 32 }}>
        <Typography variant='h4' component='h2' gutterBottom>店舗情報編集</Typography>
            <TextField label={'店名'} defaultValue={shopDetail.shopName} onChange={getInputShopName} style={{display: 'block', marginBottom: 16}} fullWidth />
            <TextField label={'住所'} defaultValue={shopDetail.address} onChange={getInputAddress} style={{display: 'block', marginBottom: 16}} fullWidth/>
            <TextField label={'電話番号'} defaultValue={shopDetail.tel} onChange={getInputTel} style={{display: 'block', marginBottom: 16}} fullWidth/>
            <Button variant="contained" color="primary" onClick={() => updateShopDetail(shopId)}>更新</Button>
            <Link to={'/shop-info/' + shopId} style={{ textDecoration:'none' }}>
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

export default ShopInfoEditor
