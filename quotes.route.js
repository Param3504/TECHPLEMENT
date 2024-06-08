const quotesController = require('../controller/Quotes')

module.exports = (app) => {
    
    app.get("/", quotesController.getQuotes);

}