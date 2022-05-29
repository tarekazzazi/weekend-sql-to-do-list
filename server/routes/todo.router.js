const express = require("express");
const toDoRouter = express.Router();
const pool = require("../modules/pool");


// DB CONNECTION


// GET
toDoRouter.get("/", (req, res) => {
    let sqlQuery = `
        SELECT * FROM tasks
    `;
    pool
        .query(sqlQuery)
        .then((responce) => {
            console.log('get working',responce);
            res.send(responce);
        })
        .catch((err) => {
            console.log("error getting to tasks",err);
            res.sendStatus(500);
        })
    
})

module.exports = toDoRouter;