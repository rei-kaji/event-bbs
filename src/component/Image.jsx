import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import pic from './img/travel-nomades-JO19K0HDDXI-unsplash.jpg';

function Image() {
  return (
    <Container maxWidth='sx'>
      <Box
        sx={{ bgcolor: '#cfe8fc', height: '50vh', m: 2 }}
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        <img
          src={pic}
          srcSet={pic}
          alt='ttt'
          loading='lazy'
          height='100%'
          margin='auto'
        />
      </Box>
    </Container>
  );
}

export default Image;
