import Image from '../Image';
import Explanation from '../Explanation.jsx';
import Events from '../Events/Events.jsx';

function Home(props) {
  return (
    <div className='Home'>
      <Image />
      <Explanation
        explanation={
          "Welcome to Vamos! This app tells you how many people are playing the sports which you want to play rigth now. Just check this app out before going to seek buddies playing with. You don't need to physically go out anymore. Of course we know you guys are extreamely voluntary. Update numbers of people playing sports when you are at places where the sports are held. It will help a lot other mates and you would play with them. Big thank you."
        }
      />
      <Events dbData={props.dbData} />
    </div>
  );
}

export default Home;
