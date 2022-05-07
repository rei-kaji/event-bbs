import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Explanation() {
  return (
    <Container maxWidth='sx'>
      <Box sx={{ bgcolor: '#0F1F3D', height: '30vh', m: 2 }}>
        <Typography
          sx={{ p: 2 }}
          paragraph={true}
          color='text.secondary'
          variant='h5'
        >
          Hello World!
        </Typography>
      </Box>
    </Container>
  );
}

export default Explanation;
