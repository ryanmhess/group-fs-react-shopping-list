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