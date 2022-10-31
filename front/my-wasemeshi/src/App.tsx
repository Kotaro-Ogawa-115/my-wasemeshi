import React from 'react'
import './css/App.css'
import { Grid } from '@material-ui/core'
import Header from './components/Header'
import ShopList from './components/ShopList'
import ShopInfo from './components/ShopInfo'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Registration from './components/Registration'
import ShopInfoEditor from './components/ShopInfoEditor'
import ShopDeleteConfirm from './components/ShopDeleteConfirm'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Grid container direction='column'>
        <Header />
        <Routes>
          <Route path='/' element={<ShopList />} />
          <Route path='shop-info/:shopId' element={<ShopInfo />} />
          <Route path='shop-info/edit/:shopId' element={<ShopInfoEditor />} />
          <Route path='confirm-delete/:shopId' element={<ShopDeleteConfirm />} />
          <Route path='registration' element={<Registration />} />
        </Routes>
      </Grid>
    </BrowserRouter>
  )
}

export default App
