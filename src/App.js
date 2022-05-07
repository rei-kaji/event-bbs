import './index.js';
import Header from './component/Header';
import Image from './component/Image';
import Explanation from './component/Explanation.jsx';
import CssBaseline from '@mui/material/CssBaseline';
import Events from './component/Events/Events.jsx';

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
