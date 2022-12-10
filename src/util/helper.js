function printDate(){
    let day = (new Date().getDate())
    console.log('current Date is :',day);
}


function printMonth(){
    let month = (new Date().getMonth()+1)
    console.log('current month is :',month);
}
    
 function getBatchInfo(){
    let batchName = "californium"
    let weekDay = "W3D3"
    let Topic = "nodejs module system"
    console.log(batchName, weekDay, Topic);
 }   




module.exports.currentDate =printDate
module.exports.currentMonth =printMonth
module.exports.currentBatch =getBatchInfo




// hii