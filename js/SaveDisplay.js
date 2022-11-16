// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
$(".sampleSurvey input[type='submit']").click(function (e) {
  e.preventDefault();
  // get the value of the form using serializeArray method
  //get the value of form
  var inputdata = $('form').serializeArray();
  var data = {}; // data to be sent to database

  /* save the data to database */
  inputdata.forEach((entry) => {
    // console.log(entry);
    data[entry.name] = entry.value;
  });
  //console.log(data);
  firebase.firestore().collection('surveydata').add(data);
  /* clear the entry */
  $('form')[0].reset();
});

/* read the data from the database */
firebase
  .firestore()
  .collection('surveydata')
  .onSnapshot((querySnapshot) => {
    var nA = 0;
    var nB = 0;
    var nC = 0;
    var nD = 0;
    var nE = 0;
    console.log(querySnapshot.size);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      console.log(doc.data().choice);
      console.log(doc.data().comm);
      // update the result in table
      var s = doc.data().choice;
      switch (s) {
        case 'A':
          nA++;
          $('#ans1').text(nA);
          break;
        case 'B':
          nB++;
          $('#ans2').text(nB);
          break;
        case 'C':
          nC++;
          $('#ans3').text(nC);
          break;
        case 'D':
          nD++;
          $('#ans4').text(nD);
          break;
        case 'E':
          nE++;
          $('#ans5').text(nE);
          break;
      }
    });
  });
