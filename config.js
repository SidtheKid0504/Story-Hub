import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBVUNoQY-BQyacMebqyx55FMU4LGsaidD8",
  authDomain: "story-hub-b3a4c.firebaseapp.com",
  projectId: "story-hub-b3a4c",
  storageBucket: "story-hub-b3a4c.appspot.com",
  messagingSenderId: "681859114421",
  appId: "1:681859114421:web:8c26f1ef313e3056bb25fc"
};

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();