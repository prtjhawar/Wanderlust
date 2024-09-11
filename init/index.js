const mongoose = require("mongoose");
const initdata = require("./data.js");
const listing = require("../models/listing.js")


const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().then(()=>{
    console.log("data base is connected")
})
.catch((err)=>{
    console.log(err);

})



async function main(){
    await mongoose.connect(MONGO_URL)

}

const initdb = async () =>{
    // await Listing.deleteMany({});

    await listing.insertMany(initdata.data);
    console.log("data was initialize");
    

}

initdb();