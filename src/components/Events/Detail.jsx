import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Explanation from '../Explanation.jsx';
import Events from '../Events/Events.jsx';
import {db} from '../../firebase';
import {
  doc,
  updateDoc
} from "firebase/firestore";

function updateEvent(countNumber,documentId){

    const washingtonRef = doc(db, "number1", documentId);

    updateDoc(washingtonRef, {
      attendees: countNumber
    });
}

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


function Detail(props) {
  const classes = useStyles();
  const [count, setCount] = useState();

  return (
    <ThemeProvider theme={theme}>
      <Events
        title={props.title}
        img={props.img}
        eventName={props.eventName}
        link={props.link}
        adress={props.adress}
        adressLink={props.adressLink}
        attendees={props.attendees}
        lastUpdate={props.lastUpdate}
      />
      <Explanation explanation={props.explanation} />
      {/* Event Attendees Count Input */}
      <Container maxWidth='sx'>
        <Box sx={{ height: 'auto', m: 2 }}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <Typography
                    variant='h3'
                    component='div'
                    className={classes.wrapIcon}
                    lineHeight={3}
                  >
                    We're now...
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    id='filled-number'
                    label='people'
                    type='number'
                    value={count}
                    onChange={e=>{
                      setCount(e.target.value)
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant='filled'
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Container>
      {/* Event Detail Update */}
      <Container sx={{ alignItems: 'center' }}>
        <Grid
          container
          spacing={0}
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <Button
            variant='contained'
            style={{
              maxWidth: '200px',
              minWidth: '200px',
              backgroundColor: '#AE303A',
            }}
            // Update attendees count of firestore
            onClick={() => {
              if(count == ""){
                // This second paramater should change to 'props.documentId'.
                updateEvent(0,"TTrBeIyfTnRjVASXNmMg")
              }
              else{
                // This second paramater should change to 'props.documentId'.
                updateEvent(count,"TTrBeIyfTnRjVASXNmMg")
              }
              
            }}
          >
            Update
          </Button>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default Detail;