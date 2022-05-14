import Image from '../Image';
import Explanation from '../Explanation.jsx';
import Events from '../Events/Events.jsx';

function Home() {
  return (
    <div className='Home'>
      <Image />
      <Explanation />
      <Events eventName='Soccer' />
    </div>
  );
}

export default Home;
