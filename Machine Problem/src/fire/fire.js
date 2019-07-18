import firebase from 'firebase';

  const config = {
    apiKey: "AIzaSyCM_aoYM9ofrxklYY9zuGoNvCuFYEEsNR8",
    authDomain: "reactjs-machine-problem.firebaseapp.com",
    databaseURL: "https://reactjs-machine-problem.firebaseio.com",
    projectId: "reactjs-machine-problem",
    storageBucket: "reactjs-machine-problem.appspot.com",
    messagingSenderId: "365878798477",
    appId: "1:365878798477:web:73b0e32520698731"
  };

  const fire = firebase.initializeApp(config);
  export default fire;