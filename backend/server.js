const app = require("./app")

const dotenv = require("dotenv");
const connectDatabase = require("./config/database");


//configuration
dotenv.config({path : "backend/config/config.env"});


//connecting to mongoDB
connectDatabase();



app.listen(process.env.PORT,() => {
    console.log(`Sever is working on http://localhost:${process.env.PORT}`);
});