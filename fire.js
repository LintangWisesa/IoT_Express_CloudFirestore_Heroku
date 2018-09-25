var firebase = require('firebase')
// change lines below with your own Firebase snippets!
var config = {
  apiKey: "a1b2c3d4e5f6g7h8i9j0",
  authDomain: "lintang_iot.firebaseapp.com",
  databaseURL: "https://lintang_iot.firebaseio.com",
  projectId: "lintang_iot",
  storageBucket: "lintang_iot.appspot.com",
  messagingSenderId: "1234567890"
};
const fire = firebase.initializeApp(config);
module.exports = fire;