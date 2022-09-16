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

//  PUT

// UPDATE
router.put('/:id', (req, res) => {
    const sqlText = `
    UPDATE shoppingList
        SET purchased = TRUE
        WHERE id = $1;
    `
    const sqlValues = [req.params.id];
    pool.query(sqlText, sqlValues)
    .then((dbRes) => {
        res.sendStatus(200);
    })
    .catch((dbErr) => {
        console.log('SQL failed in PUT /dentists/:id', dbErr);
        res.sendStatus(500);
    })
})

module.exports = router;