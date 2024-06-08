const mongoose = require("mongoose")


const quoteSchema = mongoose.Schema({
    
    id: {
        type: Number,
        required: true, 
        unique:true
    },
    quote: {
        
        type: String,
        required: true,
        
    },
    author: {
        
        type: String, 
        required: true,
        
    }
})

module.exports = mongoose.model("Quotes", quoteSchema);
