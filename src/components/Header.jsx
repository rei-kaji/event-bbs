import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' sx={{ bgcolor: '#0F1F3D' }}>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Vamos
          </Typography>
          <a
            href='mailto:sample@sample.com'
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <Button color='inherit'>Contact</Button>
          </a>
        </Toolbar>
      </AppBar>
    </Box>
  );
}