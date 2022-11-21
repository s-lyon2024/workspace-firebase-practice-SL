//import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyC9IFN_gsJbH-vsNw2bghWq5Shp3zMO3y8',
  authDomain: 'grocies-700b7.firebaseapp.com',
  projectId: 'grocies-700b7',
  storageBucket: 'grocies-700b7.appspot.com',
  messagingSenderId: '616117787461',
  appId: '1:616117787461:web:8ec17f04f27cfe51fbfc2c',
  measurementId: 'G-KVEGFW5T0Q',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$('#Login').submit(function (e) {
  e.preventDefault();
  // get the user name and password from form
  // You need to change this.
  var email = $('#login').val();
  var password = $('#pwd').val();
  console.log('email: ' + email + ' password: ' + password);
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((success) => {
      // Signed in
      console.log('login in');
      let user = firebase.auth().currentUser;
      window.location.href = 'index.html';
      //user.updateProfile({ displayName: "Not sure" });
      if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        console.log(name + email + emailVerified);
      }
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });

  $('#signGoogle').click(function() {
    const provider = new firebase.auth.GoogleAuthProvider();
    console.log('Google');
    //const auth = getAuth();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const user = result.user;
        console.log('Google user' + credential.email + 'Log in');
        //  const token = credential.accessToken;
        // The signed-in user info.
        //  const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  });
});
