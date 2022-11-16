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
$('#signup-form').submit(function (e) {
  e.preventDefault();
  // get the username(email) and password from the form
  // change the following code
  var email = $('#username').val();
  // console.log(email);
  var password = $("input[type='password']").val();
  // console.log(password);

  // create a user with email address and password
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      // Signed in
      // ...

      console.log('You are signed up');
      window.location.href = 'Login.html';
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(errorMessage);
    });
});
