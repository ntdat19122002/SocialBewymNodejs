const mongoose = require("mongoose");
mongoose.set('strictQuery',true)

class Database {

    constructor(){
        this.connect()
    }
    connect() {
        mongoose.connect('mongodb+srv://ntdat19122002:ntdat6936@twitrercloneclutter.mjmku.mongodb.net/?retryWrites=true&w=majority')
            .then(() => {
                console.log("database connection successful");
            })
            .catch((err) => {
                console.log("database connection error " + err);
            })
    }
}

module.exports = new Database();