import React from 'react'
import { AppBar, createStyles, IconButton, makeStyles, MenuItem, Theme, Toolbar, Menu} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position='static' style={{ backgroundColor: '#000' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>俺のワセメシ</h1>
        <IconButton edge="start"color="inherit" aria-label="menu" onClick={handleClick}>
          <MenuIcon />
        </IconButton>
        <Menu anchorEl={anchorEl} keepMounted open={open} onClose={handleClose}>
          <Link to={'/'} style={{ color:'#000', textDecoration:'none'}}>
            <MenuItem onClick={handleClose}>トップページ</MenuItem>
          </Link>
          <Link to={'/registration'} style={{ color:'#000', textDecoration:'none'}}>
            <MenuItem onClick={handleClose}>新規登録</MenuItem>
          </Link>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

export default Header
