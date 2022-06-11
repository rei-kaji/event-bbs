import './index.js';
import Header from './components/Header';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Detail from './components/Events/Detail';
import { db } from './firebase';
import { useState, useEffect } from 'react';
import { collection, getDocs, query, onSnapshot } from 'firebase/firestore';

function App() {
  const [posts, setPosts] = useState([]);

  // Getting data from firebase
  useEffect(() => {
    const postData = collection(db, 'number1');
    // const q = query(postData);
    getDocs(postData).then((snapShot) => {
      setPosts(snapShot.docs.map((doc) => doc.data({ ...doc.data })));
    });

    /* Getting data on realtime */
    onSnapshot(query(postData), (posts) => {
      setPosts(posts.docs.map((doc) => ({ ...doc.data() })));
    });
  }, []);

  return (
    <div className='App'>
      <CssBaseline />
      <Header />
      <Routes>
        <Route index element={<Home dbData={posts} />} />
        <Route
          path='/detail/:id'
          element={<Detail dbData={posts} />}
        />
      </Routes>
    </div>
  );
}

export default App;
