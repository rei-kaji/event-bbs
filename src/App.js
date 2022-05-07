import './index.js';
import Header from './component/Header';
import Image from './component/Image';
import Explanation from './component/Explanation.jsx';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <div className='App'>
      <CssBaseline />
      <Header />
      <Image />
      <Explanation />
    </div>
  );
}

export default App;
