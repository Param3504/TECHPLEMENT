
const quoteCollection = require("../model/quote.model")
exports.getQuotes = async (req , res) => {

    try {
        const ourQuotes =await quoteCollection.find({});
        console.log("Our quotes ", ourQuotes);

        res.status(201).send(ourQuotes);
    } catch (error) {
        
        console.log(error, " in Quotes.js")
        res.status(500).json({ error: "Internal Server Error" });
    }

};
