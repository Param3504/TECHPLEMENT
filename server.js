const express = require("express");
const { default: mongoose } = require("mongoose");
const quotesList =require("./data/quotesList")
const quoteCollection = require("./model/quote.model")
const cors = require("cors");
console.log(quotesList);

const app = express();

app.use(cors());
const dbConfig = {
  DB_NAME: "Quotes",
  DB_URL: "mongodb://127.0.0.1/Quotes",
}; 

app.use(express.json())

require('./routes/quotes.route')(app);


app.listen(8080, () => {
    console.log("server listening at port ", 8080);

})

mongoose.connect(dbConfig.DB_URL)


const db = mongoose.connection



db.on("error", () => {
  console.log("Error while opening the db please try again later ");
});

db.once("open", () => {
  console.log("Connected to db successfully");
    init();
});


async function init() {


    try {

        const items = await quoteCollection.find({});
        if (!items) {
        
    
            quotesList.map(async (item) => {
                await quoteCollection.create(item);

            })
            console.log("added sucessfully")
        }
        else {
            console.log("Item already exist ")
        }
    }
    catch (error) {
        console.log(error);

    }
    
    
}