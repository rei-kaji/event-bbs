import React, { useState } from "react";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RoomIcon from '@mui/icons-material/Room';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

export default function EventDetail(props){
    return(
        <div>
            {/* Event Card Create */}
            <Container sx={{ py: 8 }} maxWidth="md" style={{paddingTop:10,paddingBottom:0}} >
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    {/* Event Title */}
                    <CardContent sx={{ flexGrow: 1 }} style={{paddingTop:0,paddingBottom:0}}>
                        <Typography>
                            <h3>{props.name}</h3>
                        </Typography>
                    </CardContent>
                    {/* Event Image */}
                    <CardMedia
                        component="img"
                        image={props.img}
                        objectFit="contain"
                    />
                    {/* Event Info */}
                    <CardContent sx={{ flexGrow: 1 }} style={{paddingBottom:0}}>
                        <Typography paragraph>
                            <div className="event_info">
                                <div>
                                    <div className="event_info_group">
                                        <div className="event_info_date">
                                            <AccessTimeIcon className="event_info_icon" fontSize="medium"/>
                                            <span className="event_info_span">{props.date}</span>
                                        </div>
                                        <div className="event_info_count">
                                            Attendees: {props.attendees} people
                                        </div>
                                    </div>
                                    <div className="event_info_adress" >
                                        <RoomIcon className="event_info_icon" fontSize="medium"/>
                                        <a target="_blank" href={props.adress_link}>{props.adress}</a>

                                    </div>
                                    
                                    <div className="event_info_genre">
                                        <SportsSoccerIcon className="event_info_icon" fontSize="medium"/>
                                        <span  className="event_info_span">{props.genre}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="event_info_updatedate">Last Update: {props.last_update}</div>
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
            {/* Event Explanation */}
            <Container sx={{ py: 8 }} maxWidth="md" style={{paddingTop:10,paddingBottom:0}}>
                {/* End hero unit */}
                <Grid xs={12} sm={6} md={4}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardContent className="event_detail"  sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h4">Explanation of {props.name}</Typography>
                                <Typography variant="p">{props.detail}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
            </Container>
            {/* Event Attendees Count Input */}
            <Container sx={{ py: 8 }} maxWidth="md" style={{paddingTop:10,paddingBottom:15}}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}>
                    <div className="event_status">
                        <p className="event_status_title">We're now...</p>
                        <input type="number" max="100" className="event_status_input"></input>
                        <p className="event_status_item">people</p>
                    </div>
                </Card>
            </Container>
            {/* Event Detail Update */}
            <div className="event_info_updatebutton">
                 <Button variant="contained" sx={"background-color:#AE303A;"} style={{maxWidth: '200px', minWidth: '200px'}}>Update</Button>
            </div>
        </div>

    );
}