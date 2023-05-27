const mongoose = require("mongoose");
const ENV = require("./ENV");
const connect = async () => {
    try {
        const connection = await mongoose.connect(ENV.DB, {
            serverSelectionTimeoutMS: 5000,
          });
        console.log("Your Data Base is Connected !");
    } catch (error) {
        console.log(error.message);
        process.exit;
    }
}
module.exports = connect