'use client'

import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Drawer, List, ListItem, ListItemText, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { deepOrange } from '@mui/material/colors';
import Link from 'next/link';
import useMediaQuery from '@mui/material/useMediaQuery';

export function NavLinks() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const open = Boolean(anchorEl);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = (
    <List>
      <ListItem  component="a" href="/dashboard">
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem  component="a" href="/dashboard/funcionarios">
        <ListItemText primary="Funcionários" />
      </ListItem>
      <ListItem  component="a" href="/dashboard/solicitar-ordem">
        <ListItemText primary="Solicitar Ordem" />
      </ListItem>
      <ListItem  component="a" href="/dashboard/suporte">
        <ListItemText primary="Suporte" />
      </ListItem>
    </List>
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Folha de Pagamento
          </Typography>
          {!isMobile && (
            <div>
              <Link href="/dashboard" passHref>
                <Typography variant="button" color="inherit" style={{ marginRight: '16px' }}>
                  Dashboard
                </Typography>
              </Link>
              <Typography
                variant="button"
                color="inherit"
                onClick={handleClick}
                style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }}
              >
                Gestão
                <KeyboardArrowDownIcon />
              </Typography>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <Link href="/dashboard/funcionarios">Funcionários</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link href="/dashboard/solicitar-ordem">Solicitar Ordem</Link>
                </MenuItem>
              </Menu>
              <Link href="/dashboard/suporte" passHref>
                <Typography variant="button" color="inherit">
                  Suporte
                </Typography>
              </Link>
            </div>
          )}
          <Avatar sx={{ bgcolor: deepOrange[500] }}>LT</Avatar>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {menuItems}
      </Drawer>
    </>
  );
}