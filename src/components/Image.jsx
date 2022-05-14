import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import pic from './Img/lars-bo-nielsen-xewH-utuFYA-unsplash.jpg';
import CardMedia from '@mui/material/CardMedia';

function Image() {
  return (
    <Container maxWidth='sx'>
      <Box sx={{ height: '50vh', m: 2 }}>
        <CardMedia
          component='img'
          height='100%'
          image={pic}
          alt='green iguana'
        />
      </Box>
    </Container>
  );
}

export default Image;
