'use client'

import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import Link from 'next/link';
import { Button, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#222',
      color: '#fff',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    menuList: {
      display: 'flex',
      listStyle: 'none',
      alignItems: 'center',
    },
    menuItem: {
      marginLeft: '20px',
      display: 'flex',
      alignItems: 'center',
    },
    menuLink: {
      color: '#fff',
      textDecoration: 'none',
      padding: '6px 8px',
      fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
      fontWeight: 500,
      fontSize: '0.875rem',
      textTransform: 'uppercase',
      lineHeight: 1.75,
    }
};

export function NavLinks() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <span className='text-xl'> Folha de Pagamento </span>
      </div>
      <ul style={styles.menuList}>
        <li style={styles.menuItem}>
          <Link href="/dashboard" style={styles.menuLink}>Dashboard</Link>
        </li>
        <li style={styles.menuItem}>
          <Button
            color="inherit"
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Gestão
          </Button>
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
        </li>
        <li style={styles.menuItem}>
          <Link href="/dashboard/suporte" style={styles.menuLink}>Suporte</Link>
        </li>
      </ul>
      <Avatar sx={{ bgcolor: deepOrange[500] }}>LT</Avatar>
    </nav>
  )
}