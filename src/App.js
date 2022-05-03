import React, { useState } from "react";
import EventDetail from "./components/EventDetail";

function App() {
  return (
    <div className="App">
      <h1>soccer-event-bbs</h1>
      <EventDetail 
        name="EventNameA"
        img="https://source.unsplash.com/random"
        date="xx:xx"
        adress="aaa"
        adress_link="https://www.google.com/maps/search/?api=1&parameters"
        genre="soccer"
        attendees="100"
        last_update="xx:xx"
        detail="xxxxxxxXxxxxxxxx"
      />
    </div>
  );
}

export default App;
