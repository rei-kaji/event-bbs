import './index.js';
import Header from './components/Header';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import EventDetail from './components/Events/EventDetail';
function App() {
  return (
    <div className='App'>
      <CssBaseline />
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route
          path='/detail'
          element={
            <EventDetail
              name='EventNameA'
              img='https://source.unsplash.com/random'
              date='xx:xx'
              adress='aaa'
              adress_link='https://www.google.com/maps/search/?api=1&parameters'
              genre='soccer'
              attendees='100'
              last_update='xx:xx'
              detail='This event is standing on Robson street. There are a lot of goals and people everyday. So, if you want to play soccer, you should come here.This event is standing on Robson street. There are a lot of goals and people everyday. So, if you want to play soccer, you should come here.This event is standing on Robson street. There are a lot of goals and people everyday. So, if you want to play soccer, you should come here.'
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
