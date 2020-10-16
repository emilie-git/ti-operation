var express = require('express');
var router = express.Router();

/* GET Multiplication parameters. */
router.get('/', function (req, res, next) {
    const values = Object.values(req.query);
    // empty parameters
    if(values.length === 0){
        return res.status(400).send("Please put number in url.");
    }
    // First element is not a number
    else if (Object.is(parseInt(values[0]), NaN)) {
        return res.status(400).send("Put only numbers in url parameters.");
    }
    let total = values.reduce((acc, currentValue, array) => {
        if(Object.is(parseInt(currentValue), NaN)){
            array = [];
            return false;
        }
        else {
            return acc  * parseInt(currentValue);
        }
    });
    // If a parameter is not a number
    if(total == false) {
        return res.status(400).send("Put only numbers in url parameters.");
    }
    return res.status(200).json({
        'values': values,
        'total': total,
    });
});

module.exports = router;