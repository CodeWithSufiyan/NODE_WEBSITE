let express = require('express');
let bodyParser = require('body-parser');

let app = express();

// set middlewares
app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(bodyParser.json());
app.use('/catalog', require('./routes/catalog'));

app.listen(process.env.PORT || 3517, () => {
    console.log("Listening to port 3517");
});

app.get('/', (req, res) => {
    res.render('index.ejs')
})