'use client'

import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import Link from 'next/link'

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
    },
    menuItem: {
      marginLeft: '20px',
    },
  };

export function NavLinks() {

  return (
    <nav style={styles.navbar}>
    <div style={styles.logoContainer}>
      <span className='text-xl'> Folha de Pagamento </span>
    </div>
    <ul style={styles.menuList}>
      <li style={styles.menuItem}>
        <Link href="/dashboard">Dashboard</Link>
      </li>
      <li style={styles.menuItem}>
        <Link href="/dashboard/solicitar-ordem">Solicitar Ordem</Link>
      </li>
      <li style={styles.menuItem}>
        <Link href="/dashboard/suporte">Suporte</Link>
      </li>
    </ul>
    <Avatar sx={{ bgcolor: deepOrange[500] }}>LT</Avatar>
    
  </nav>
  )
}