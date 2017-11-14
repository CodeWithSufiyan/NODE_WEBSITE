let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
let urlencodeParser = bodyParser.urlencoded({ extended: false });

// require controller modules
let catalogController = require('../controllers/catalogController');

router.post('/user/authenticate', (req, res) => {
    if (req.body.email && req.body.username && req.body.password && req.bodyConfirm) {
        res.send("success")
    }
});

/// CATALOG ROUTES ///

/* GET catalog page */
router.get('/catalog', catalogController.view_catalog_get);
/* GET contacts page */
router.get('/contact', catalogController.view_contact_get);


module.exports = router;

