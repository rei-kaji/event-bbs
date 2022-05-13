import './index.js';
import Header from './components/Header';
import Image from './components/Image';
import Explanation from './components/Explanation.jsx';
import CssBaseline from '@mui/material/CssBaseline';
import Events from './components/Events/Events.jsx';

function App() {
  return (
    <div className='App'>
      <CssBaseline />
      <Header />
      <Image />
      <Explanation />
      <Events />
    </div>
  );
}

export default App;
