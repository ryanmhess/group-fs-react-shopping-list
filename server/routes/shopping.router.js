const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

//  GET
router.get('/', (req,res) => {
    console.log('just got to router.get');
    const sqlText = `
        SELECT * FROM shoppingList
            ORDER BY "id"
        `;
    pool.query(sqlText)
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log('Error:', error);
            res.sendStatus(500);
        });
});

//  POST

//  DELETE

router.delete('/:id', (req, res) => {
    console.log(`Deleting Item, ID ${req.params.id}`);
    
    let deleteID = [req.params.id];
    
    const sqlText = `
        DELETE from shoppingList
        WHERE "id"=$1;
        `
    
        pool.query(sqlText, deleteID)
.then((result) => {
    res.sendStatus(200);
})
.catch((error) => {
    console.log(`Error Deleting Item`, error)
    res.sendStatus(500);
});
});


//  PUT

module.exports = router;