const express = require('express');
const server = express();
const cors = require('cors');
// const path = require('path');
// this is to conver the body to json 
const bodyParser = require('body-parser');
// this is to get the path of any file without any difficulty
// const path=require('path');
const mongoose = require('mongoose');
const router = require('./routes/rPatient')
const router1=require('./routes/rHospital')
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cors());
// server.use(express.static(path.join(__dirname, 'build')));

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://mrkunal:Santosh1k@cluster0.xqdaj.mongodb.net/Techcare?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((err) => console.error('Could not connect to MongoDB Atlas...', err));

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}






// form here this will contain alll middleware
server.use(bodyParser.json()); //this is to convert body data which is coming from frontend to json






// calling api by using middleware
server.use('/api/rPatient', router);
// calling api for the hospital signup by using middleware
server.use('/api/rhospital',router1);






server.listen(8084, () => {
  console.log("server created successfully")
})

