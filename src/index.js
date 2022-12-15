const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://RajnishCalifornium:Nish54321@rajnishcalifornium.qhqnlpb.mongodb.net/Rajnish54321-DB",{
    useNewUrlParser:true
})
.then(  ()  => console.log("MongoDb is connected"))
.catch( err => console.log(err) )

app.use('/', route);

app.listen(process.env.PORT || 3002, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3002))
});
