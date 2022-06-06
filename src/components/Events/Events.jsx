import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';

dayjs.extend(isSameOrAfter);

const useStyles = makeStyles(() => ({
  wrapIcon: {
    alignItems: 'center',
    display: 'flex',
  },
}));

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

theme.typography.body2 = {
  fontSize: '0.8rem',
  '@media (min-width:600px)': {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
  },
};

function Events(props) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      {props.dbData.map((event, index) => {
        let attendeesCount = 0
        let date = dayjs(event?.lastUpdate?.toDate());
        let beforeTwoHour = dayjs().add(-2,'h');

        if(date.isSameOrAfter(beforeTwoHour)){
          attendeesCount = event.attendees;
        }
        
        return (
          <Link
            to={`/detail/${index}`}
            style={{ textDecoration: 'none' }}
            key={index}
          >
            <Container maxWidth='sx'>
              <Box sx={{ m: 2 }}>
                <Card>
                  <CardActionArea>
                    <Typography
                      sx={{ p: 1, m: 0, fontWeight: 'bold' }}
                      paragraph={true}
                      variant='h3'
                    >
                      {event.eventName}
                    </Typography>
                    <CardMedia
                      component='img'
                      height='140'
                      image={event.img}
                      alt=''
                    />
                    <CardContent>
                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={6}>
                            <Typography
                              variant='h3'
                              component='div'
                              className={classes.wrapIcon}
                            >
                              <LocationOnIcon sx={{ mr: '1rem' }} />
                              {event.address}
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography variant='h3'>
                              Attendees {attendeesCount}
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography
                              variant='body2'
                              color='text.secondary'
                              className={classes.wrapIcon}
                            >
                              <SportsSoccerIcon sx={{ mr: '1rem' }} />
                              {event.jenre}
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography variant='body2' color='text.secondary'>
                              Last updated :
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                              {date.format('DD/MMMM/YY HH:mm')}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>
            </Container>
          </Link>
        );
      })}
    </ThemeProvider>
  );
}

export default Events;
