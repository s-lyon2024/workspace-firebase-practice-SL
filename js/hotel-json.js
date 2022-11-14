/* Change the configuration */

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

// enter data in
$("input[type='button']").click(function (e) {
  //get the value of form
  var inputdata = $('form').serializeArray();
  var data = {}; // data to be sent to database
  // console.log(inputdata[2].name);
  // console.log(inputdata[2].value);

  /* save the data to database */
  inputdata.forEach((entry) => {
    console.log(entry);
    data[entry.name] = entry.value;
  });
  console.log(data);
  firebase.firestore().collection('hotelcollections').add(data);

  /* clear the entry */
  $('form')[0].reset();
});

/* array example
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
*/

/* read the data from the database */

firebase
  .firestore()
  .collection('hotelcollections')
  .onSnapshot((querySnapshot) => {
    console.log(querySnapshot.size);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      console.log(doc.data().room);
      console.log(doc.data().checkout);
      console.log(doc.data().checkin);
      console.log(doc.data().name);
      console.log(doc.data().num);
    });
  });
