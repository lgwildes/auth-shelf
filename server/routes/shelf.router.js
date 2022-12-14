const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
  console.log('here!');
  const sqlText = `SELECT * FROM item;`;
  pool.query(sqlText)
    .then((response) => {
      // console.log(response.rows);
      res.send(response.rows)
    })
    .catch((err) => {
      console.log('error on /GET', err);
      res.sendStatus(500);
    });
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
  if(req.isAuthenticated()){
    console.log('/item POST route');
    console.log(req.body.description);
    console.log('is authenticated?', req.isAuthenticated());
    console.log('user', req.user);
    const sqlText = `INSERT INTO "item" ("description", "image_url", "user_id")
    VALUES ($1, $2, $3);`;
    const sqlParams = [req.body.description, req.body.url, req.user.id]
    pool.query(sqlText, sqlParams)
        .then(dbRes =>{
            res.sendStatus(201);
        })
        .catch(dbErr => {
            console.error('error in adding item', dbErr);
            res.sendStatus(500);
        });
    }
    else {
        res.sendStatus(403);
    }
  // endpoint functionality
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  console.log('❌ ID to delete is', req.params.id);
  const sqlText = `DELETE FROM "item"
                  WHERE id = $1`

  const sqlParams = [req.params.id]

  pool.query(sqlText, sqlParams)
    .then(() => res.sendStatus(200))
    .catch((error) => {
      console.log('error in router.delete', error)
      res.sendStatus(500);
    });
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
