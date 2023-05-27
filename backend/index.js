const express = require("express");
const ENV = require("./config/ENV");
const app = express();
const connect = require("./config/DB_Connection");
const admin_router = require("./routes/userRoutes");
connect();
const PORT = ENV.PORT || 5000;
app.get("/",(req,res)=>{
    res.send("well Come To office")
})

app.use(express.json());
app.use(admin_router)


app.listen(PORT,()=>{
    console.log(`Your Server is One PORT : ${PORT}`);
})