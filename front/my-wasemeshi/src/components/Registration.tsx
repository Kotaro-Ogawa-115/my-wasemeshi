import { Typography, Grid, Button, TextField } from '@material-ui/core'
import React from 'react'
import useRegistration from '../hooks/useRegistration'

const Registration: React.FC = () => {
  const [getInputShopName, getInputAddress, getInputTel, registryShopDetail] = useRegistration()
  return (
    <Grid container>
        <Grid sm={2} />
        <Grid lg={8} sm={8} spacing={0} style={{ margin: 32 }}>
          <Typography variant='h4' component='h2' gutterBottom>新規登録</Typography>
          <TextField label={'店名'} style={{display: 'block', marginBottom: 16}} onChange={ getInputShopName } fullWidth />
          <TextField label={'住所'}  style={{display: 'block', marginBottom: 16}} onChange={ getInputAddress } fullWidth/>
          <TextField label={'電話番号'} style={{display: 'block', marginBottom: 16}}onChange={ getInputTel } fullWidth/>
          <Button variant="contained" color="primary" onClick={() => registryShopDetail()}>新規登録</Button>
        </Grid>
      </Grid>
    )
}

export default Registration
