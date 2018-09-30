const express = require('express')
const PORT = process.env.PORT || 5000
var app = express();
var fire = require('./fire')
var cors = require('cors');
var bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send(
    '<h1>Tes Express & Firebase Cloud Firestore</h1><ul><li><p><b>GET /data/esp8266</b></p></li><li><p><b>GET /data/esp32</b></p></li><li><p><b>GET /data/mkr1000</b></p></li><li><p><b>POST /data/esp8266</b>  => {suhu, lembab, analog}</p></li><li><p><b>POST /data/esp32</b>  => {suhu, lembab, analog}</p></li><li><p><b>POST /data/mkr1000</b>  => {suhu, lembab, analog}</p></li></ul>')
})

app.get('/data/esp8266', (req, res) => {
  const db = fire.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    var wholeData = []
	db.collection('lin_esp8266').orderBy('waktu', 'asc').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        // console.log(doc.id, '=>', doc.data());
        // console.log(doc.data().name + doc.data().age);
        // console.log(doc.data());
        wholeData.push(doc.data())
      });
      console.log(wholeData)
      res.send(wholeData)
    })
    .catch(error => {
      console.log('Error!', error);
  })
})

app.post('/data/esp8266', (req, res)=>{
  const db = fire.firestore();
	db.settings({
      timestampsInSnapshots: true
    });
    db.collection('lin_esp8266').add({
      suhu: req.body.suhu,
      lembab: req.body.lembab,
      analog: req.body.analog,
      waktu: new Date()
    });
    res.send({
      suhu: req.body.suhu,
      lembab: req.body.lembab,
      analog: req.body.analog,
      waktu: new Date(),
      status: 'POST data sukses!'
  })
})

app.get('/data/esp32', (req, res) => {
  const db = fire.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    var wholeData = []
	db.collection('lin_esp32').orderBy('waktu', 'asc').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        // console.log(doc.id, '=>', doc.data());
        // console.log(doc.data().name + doc.data().age);
        // console.log(doc.data());
        wholeData.push(doc.data())
      });
      console.log(wholeData)
      res.send(wholeData)
    })
    .catch(error => {
      console.log('Error!', error);
  })
})

app.post('/data/esp32', (req, res)=>{
  const db = fire.firestore();
	db.settings({
      timestampsInSnapshots: true
    });
    db.collection('lin_esp32').add({
      suhu: req.body.suhu,
      lembab: req.body.lembab,
      analog: req.body.analog,
      waktu: new Date()
    });
    res.send({
      suhu: req.body.suhu,
      lembab: req.body.lembab,
      analog: req.body.analog,
      waktu: new Date(),
      status: 'POST data sukses!'
  })
})

app.get('/data/mkr1000', (req, res) => {
  const db = fire.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    var wholeData = []
	db.collection('lin_mkr1000').orderBy('waktu', 'asc').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        // console.log(doc.id, '=>', doc.data());
        // console.log(doc.data().name + doc.data().age);
        // console.log(doc.data());
        wholeData.push(doc.data())
      });
      console.log(wholeData)
      res.send(wholeData)
    })
    .catch(error => {
      console.log('Error!', error);
  })
})

app.post('/data/mkr1000', (req, res)=>{
  const db = fire.firestore();
	db.settings({
      timestampsInSnapshots: true
    });
    db.collection('lin_mkr1000').add({
      suhu: req.body.suhu,
      lembab: req.body.lembab,
      analog: req.body.analog,
      waktu: new Date()
    });
    res.send({
      suhu: req.body.suhu,
      lembab: req.body.lembab,
      analog: req.body.analog,
      waktu: new Date(),
      status: 'POST data sukses!'
  })
})

app.listen(PORT, () => {
  console.log(`Listening on ${ PORT }`)
})
