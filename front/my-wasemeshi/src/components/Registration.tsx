import { Typography, Grid, Button, TextField, Link } from '@material-ui/core'
import React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import useRegistration from '../hooks/useRegistration'
import { shopDetailType } from '../type/shopDetailType'

const Registration: React.FC = () => {
  const {registryShopDetail} = useRegistration()
  const { handleSubmit, control} = useForm<shopDetailType>();
  const onSubmit: SubmitHandler<shopDetailType> = (data) => registryShopDetail(data);

  return (
    <Grid container>
        <Grid sm={2} />
        <Grid lg={8} sm={8} spacing={0} style={{ margin: 32 }}>
          <Typography variant='h4' component='h2' gutterBottom>新規登録</Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
              <Controller name="shopName" control={control} render={({ field }) => <TextField {...field} label={'店名'} style={{display: 'block', marginBottom: 16}} fullWidth />}/>
              <Controller name="address" control={control} render={({ field }) => <TextField {...field} label={'住所'}  style={{display: 'block', marginBottom: 16}} fullWidth/>}/>
              <Controller name="tel" control={control} render={({ field }) => <TextField {...field} label={'電話番号'} style={{display: 'block', marginBottom: 16}} fullWidth/>}/>
              <Button type="submit" variant="contained" color="primary">更新</Button>
            </form>
        </Grid>
      </Grid>
    )
}

export default Registration
