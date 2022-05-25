import './index.js';
import Header from './components/Header';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Detail from './components/Events/Detail';
import pic from './components/img/travel-nomades-JO19K0HDDXI-unsplash.jpg';

function App() {
  const title = 'Event A';
  const explanation =
    "Welcome to Vamos! This app tells you how many people are playing the sports which you want to play rigth now. Just check this app out before going to seek buddies playing with. You don't need to physically go out anymore. Of course we know you guys are extreamely voluntary. Update numbers of people playing sports when you are at places where the sports are held. It will help a lot other mates and you would play with them. Big thank you.";

  return (
    <div className='App'>
      <CssBaseline />
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route
          path='/detail'
          element={
            <Detail
              title={title}
              explanation={explanation}
              img={pic}
              eventName='Soccer'
              link=''
              adress='aaa'
              adressLink='https://www.google.com/maps/search/?api=1&parameters'
              attendees='100'
              lastUpdate='xx:xx'
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
