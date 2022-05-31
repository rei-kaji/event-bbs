// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCdgxCorY8gPVwpcO1NYsS0EpIBvT_DpLE',
  authDomain: 'event-bbs.firebaseapp.com',
  projectId: 'event-bbs',
  storageBucket: 'event-bbs.appspot.com',
  messagingSenderId: '129461518260',
  appId: '1:129461518260:web:23268805d7ea478957bce1',
  measurementId: 'G-67WLXRWXZS',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export { db };
