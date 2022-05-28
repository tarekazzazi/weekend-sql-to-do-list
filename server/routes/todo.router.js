const express = require("express");
const toDoRouter = express.Router();
const pool = require("../modules/pool");


// DB CONNECTION


// GET
toDoRouter.get("/", (req, res) => {
    let sqlQuery = `
        SELECT * FROM to_do_list
    `;
    pool
        .query(sqlQuery)
        .then((responce) => {
            console.log('get working',responce);
            res.send(responce);
        })
        .catch((err) => {
            console.log("error getting to_do_list",err);
            res.sendStatus(500);
        })
    
})

module.exports = toDoRouter;