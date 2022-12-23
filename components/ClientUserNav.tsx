'use client';

import Button from '@mui/material/Button';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

const ClientUserNav = ({children}: {children: JSX.Element}) => {
  return (
    <>
      <Button onClick={() => signOut()}>Sign Out</Button>
      <Link href='/' style={{ textDecoration: 'none' }}><Button>Home</Button></Link>
      {children}
    </>
  );
};

export default ClientUserNav;
