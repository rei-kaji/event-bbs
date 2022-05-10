import React, { useState } from "react";
import EventDetail from "./components/EventDetail";

function App() {
  return (
    <div className="App">
      <EventDetail 
        name="EventNameA"
        img="https://source.unsplash.com/random"
        date="xx:xx"
        adress="aaa"
        adress_link="https://www.google.com/maps/search/?api=1&parameters"
        genre="soccer"
        attendees="100"
        last_update="xx:xx"
        detail="This event is standing on Robson street. There are a lot of goals and people everyday. So, if you want to play soccer, you should come here.This event is standing on Robson street. There are a lot of goals and people everyday. So, if you want to play soccer, you should come here.This event is standing on Robson street. There are a lot of goals and people everyday. So, if you want to play soccer, you should come here."
      />
    </div>
  );
}

export default App;
