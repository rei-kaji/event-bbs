import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

theme.typography.h3 = {
  fontSize: '1rem',
  '@media (min-width:600px)': {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.4rem',
  },
};

function Explanation() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='sx'>
        <Box sx={{ bgcolor: '#0F1F3D', height: 'auto', m: 2 }}>
          <Typography
            sx={{ p: 4 }}
            paragraph={true}
            variant='h3'
            color='common.white'
          >
            Welcome to Vamos! This app tells you how many people are playing the
            sports which you want to play rigth now. Just check this app out
            before going to seek buddies playing with. You don't need to
            physically go out anymore. Of course we know you guys are extreamely
            voluntary. Update numbers of people playing sports when you are at
            places where the sports are held. It will help a lot other mates and
            you would play with them. Big thank you.
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Explanation;
