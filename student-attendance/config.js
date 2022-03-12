import firebase from 'firebase';

const firebaseConfig1 = {
  apiKey: "AIzaSyCUD0kJRLbSZCKdZDE28MM4v-ONHv2MUCQ",
  authDomain: "project-60-4e428.firebaseapp.com",
  databaseURL: "https://project-60-4e428-default-rtdb.firebaseio.com",
  projectId: "project-60-4e428",
  storageBucket: "project-60-4e428.appspot.com",
  messagingSenderId: "306232356751",
  appId: "1:306232356751:web:ca0f8e48fe72e65450e5fa"
};
firebase.initializeApp(firebaseConfig1);

export default firebase.database();
