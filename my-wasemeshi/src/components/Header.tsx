import React from 'react'
import { AppBar, createStyles, IconButton, makeStyles, Theme, Toolbar} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const Header: React.FC = () => {
  return (
    <AppBar position='static' style={{ backgroundColor: '#000' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>俺のワセメシ</h1>
        <IconButton edge="start"color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header
