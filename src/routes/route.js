const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})

//Q1...

const playerCollection = [{
    "name": "manish",
    "dob": "1/1/1995",
    "gender": "male",
    "city": "jalandhar",
    "sports": [
    "swimming"
    ]
    },
    {
        "name": "Raj",
        "dob": "5/1/1998",
        "gender": "male",
        "city": "Ranchi",
        "sports": [
        "cricket"
        ]
        },
        {
            "name": "Rohit",
            "dob": "23/5/1992",
            "gender": "male",
            "city": "Mumbai",
            "sports": [
            "chess"
            ]
            },
            {
                "name": "manisha",
                "dob": "31/3/2002",
                "gender": "female",
                "city": "lakhnow",
                "sports": [
                "football"
                ]
                }
                
             
    ]

    router.post("/test-post-5", function(req, res) {
        
        let xyz= req.body.name
        
        let player = playerCollection.find((x)=>x.name===xyz)
        if(player){
        res.send(  { msg: playerCollection , status: false }  )}
        else{
            playerCollection.push(req.body)
            res.send(  { msg: playerCollection , status: true }  )}
        }
    )





module.exports = router;