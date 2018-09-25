var firebase = require('firebase')
// change lines below with your own Firebase snippets!
var config = {
  apiKey: "AIzaSyDSLRypcYx2yHSqpVXJMBrzYw1xAHZtgYI",
  authDomain: "test-iot-esp.firebaseapp.com",
  databaseURL: "https://test-iot-esp.firebaseio.com",
  projectId: "test-iot-esp",
  storageBucket: "test-iot-esp.appspot.com",
  messagingSenderId: "467772798973"
};
const fire = firebase.initializeApp(config);
module.exports = fire;