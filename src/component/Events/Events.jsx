import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import pic from '../img/travel-nomades-JO19K0HDDXI-unsplash.jpg';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  wrapIcon: {
    alignItems: 'center',
    display: 'flex',
  },
}));

function Events() {
  const classes = useStyles();

  return (
    <Container maxWidth='sx'>
      <Box sx={{ m: 2 }}>
        <Card>
          <CardActionArea>
            <CardMedia
              component='img'
              height='140'
              image={pic}
              alt='green iguana'
            />
            <CardContent>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography
                      variant='h5'
                      component='div'
                      className={classes.wrapIcon}
                    >
                      <AccessTimeIcon sx={{ mr: '1rem' }} />
                      Apr 15th
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant='h6'>Attendees 8</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant='body2'
                      color='text.secondary'
                      className={classes.wrapIcon}
                    >
                      <LocationOnIcon sx={{ mr: '1rem' }} />
                      Livingstone Park
                    </Typography>
                    <Typography
                      variant='body2'
                      color='text.secondary'
                      className={classes.wrapIcon}
                    >
                      <SportsSoccerIcon sx={{ mr: '1rem' }} />
                      Soccer
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant='body2' color='text.secondary'>
                      Last updated : 1pm 22/May/2022
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Container>
  );
}

export default Events;
