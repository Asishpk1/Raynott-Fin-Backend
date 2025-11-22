const mongoose = require('mongoose')

const connectionString = process.env.CONNECTION_STRING
mongoose.connect(connectionString).then(res => {
    console.log("FinanceServer connected to MongoDB Atlas");

}).catch(err => {
    console.log("Connection failed");
    console.log(err);
})