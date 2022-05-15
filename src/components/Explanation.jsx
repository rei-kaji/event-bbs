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

function Explanation(props) {
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
            {props.explanation}
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Explanation;
