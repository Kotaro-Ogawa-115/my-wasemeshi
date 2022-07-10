import { Typography, Grid, Button } from '@material-ui/core'
import React from 'react'
import useRegistration from '../hooks/useRegistration'

const Registration: React.FC = () => {
  const [getInputShopName, getInputAddress, getInputTel, registryShopDetail] = useRegistration()
  return (
    <Grid container>
        <Grid sm={2} />
        <Grid lg={8} sm={8} spacing={0} style={{ margin: 32 }}>
          <Typography variant='h4' component='h2' gutterBottom>新規登録</Typography>
          <Typography variant='subtitle1'>店名：<input type="text" onChange={ getInputShopName } /></Typography>
          <Typography variant='subtitle1'>住所：<input type="text" onChange={ getInputAddress } /></Typography>
          <Typography variant='subtitle1'>電話番号：<input type="text" onChange={ getInputTel } /></Typography>
          <Button variant="contained" color="primary" onClick={() => registryShopDetail }>新規登録</Button>
        </Grid>
      </Grid>
    )
}

export default Registration
