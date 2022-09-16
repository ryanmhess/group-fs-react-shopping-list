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
router.post('/', (req, res) => {
    console.log('data in SS POST:', req.body)
    const sqlText = `
    INSERT INTO shoppingList (name, quantity, units)
	VALUES ($1, $2, $3)
    `
    const sqlVal = [req.body.name, req.body.quantity, req.body.units]
    pool.query(sqlText, sqlVal)
        .then((result) => {
            res.sendStatus(201)
        }).catch((error) => {
            console.log('Error in SS POST', error)
            res.sendStatus(500)
        })
})

//  DELETE

//  PUT

module.exports = router;