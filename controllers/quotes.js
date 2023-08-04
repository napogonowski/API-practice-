const fetch = require('node-fetch');
const quotesURL = "https://api.kanye.rest"

async function index (req, res)  { 
    const yeQuote = await fetch(quotesURL).then(res => res.json()) 

    console.log(yeQuote)
    res.render('index', {ye: yeQuote.quote})
}



module.exports = {
    index
}
