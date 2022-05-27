import './index.js';
import Header from './components/Header';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Detail from './components/Events/Detail';
import { EventDataList } from './components/EventsData/EventDataList';

function App() {
  return (
    <div className='App'>
      <CssBaseline />
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route
          path='/detail/:id'
          element={<Detail EventDataList={EventDataList} />}
        />
      </Routes>
    </div>
  );
}

export default App;
