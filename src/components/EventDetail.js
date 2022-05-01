import React, { useState } from "react";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RoomIcon from '@mui/icons-material/Room';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';


const cards = [1];

export default function EventDetail(props){
    

    return(
        <div>
            <Container sx={{ py: 8 }} maxWidth="md">
                {/* End hero unit */}
                <Grid xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography>
                                    <h3>EventName</h3>
                                </Typography>
                            </CardContent>
                            <CardMedia
                                component="img"
                                image="https://source.unsplash.com/random"
                                alt="random"
                                height="250px"
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography paragraph>
                                    <div className="event_info">
                                        <div>
                                            <div className="event_info_group">
                                                <div className="event_info_date">
                                                    <AccessTimeIcon/>
                                                    Event Date
                                                </div>
                                                <div className="event_info_count">
                                                    Attendees XX
                                                </div>
                                            </div>
                                            <Link className="event_info_adress" component="button" variant="body2" onClick={() => {console.info("I'm a button.");}}>
                                                <RoomIcon/>Event Adress
                                            </Link>
                                            <div className="event_info_genre">
                                                <SportsSoccerIcon/>
                                                Event Genre
                                            </div>
                                        </div>
                                    </div>
                                    <div className="event_info_updatedate">Last Update: XX:XXpm</div>
                                </Typography>
                            </CardContent>
                        </Card>
                </Grid>
            </Container>
            <Container sx={{ py: 8 }} maxWidth="md">
                {/* End hero unit */}
                <Grid xs={12} sm={6} md={4}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    <h3>Explanation of this Event</h3>
                                    <p>
                                        XXXXXXXXXXXXXXXXxXX
                                        <br></br>XXXXX
                                    </p>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
            </Container>
            <Container sx={{ py: 8 }} maxWidth="md">
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}>
                        <div className="event_status">
                            <p className="event_status_title">We're now...</p>
                            <input className="event_status_input"></input>
                            <p className="event_status_item">people</p>
                        </div>
                    </Card>
            </Container>

            <div className="event_info_updatebutton">
                        <Button variant="contained" size="large">Update</Button>
            </div>
        </div>

    );
}