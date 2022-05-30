import image0 from '../img/travel-nomades-JO19K0HDDXI-unsplash.jpg';
import {db} from '../../firebase';
import {
  collection,
  getDocs,
  where,
  query,
  onSnapshot,
} from "firebase/firestore";
import { useState, useEffect } from 'react';

function EventDataSet(){

  const[posts, setPosts] = useState([]);
  const[dataList, setDataList] = useState([]);

  useEffect(() => {
    const postData = collection(db, "number1");
    const q = query(postData, where('eventName', '==', 'Andy Livingstone Park'));
    getDocs(q).then((snapShot) => {
      //console.log(snapShot.docs);
      setPosts(snapShot.docs.map((doc) => ({ ...doc.data() })));
    });
  
    /* リアルタイムで取得 */
    onSnapshot(q, (querySnapshot) => {
      //console.log(querySnapshot.docs);
      setPosts(querySnapshot.docs.map((doc) => ({ ...doc.data() })));
    });
  }, []);
  
  {posts.map((post) => (
    setDataList([
      {
        id: 0,
        img: image0,
        explanation: post.explanation,
        eventName: post.eventName,
        link: '',
        adress: post.adress,
        adressLink: post.adressLink,
        attendees: post.attendees,
        lastUpdate: post.lastUpdate
      }
    ])
  ))}
  return dataList;
}
export {EventDataSet};