const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore')
const log = require('../logger/logger')
const uti = require('../util/helper')
const valida =require('../validator/formatter')
//const prob = require('../problem4/problem')



router.get('/test-me', function (req, res) {
    console.log("email from introduction module", intro.myEmail)
    intro.myFunction('Sabiha')
    console.log("email from employee module", employee.myEmail)

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let result = _.first(days, 4)
    console.log(`Result from underscore function is ${result}`)

    const data = ["jan", "feb", "mar", "apr", "may", "jun", "july", "aug", "sept", "oct", "nov", "dec", ];
    const chunks = _.chunk(data, 4);
    console.log(chunks);


const myData = [1,3,5,7,9,11,13,15,17,19,21 ];
    const tails = _.tail(myData);
    console.log(tails);



log.myFunction('rajnish')
console.log("welcome ",log.myFunction);
uti.currentDate()
uti.currentMonth()
uti.currentBatch()
valida.trim()
valida.lower()

valida.upper()
//prob.newArr()

    res.send('any dummy text')
});


router.get('/test-you', function(req, res){
    console.log("I am here")
    res.send("very important text")
})


module.exports = router;