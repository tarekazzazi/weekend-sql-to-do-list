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
            console.log('get working',responce.rows);
            res.send(responce.rows);
        })
        .catch((err) => {
            console.log("error getting to tasks",err);
            res.sendStatus(500);
        })
    
})

// POST
toDoRouter.post("/", (req, res) => {
  
    let newTask = req.body;

        newTask.isComplete = false;
    

    console.log('Adding new task to list',newTask);

    let queryText = `INSERT INTO "tasks"
        ("name","isComplete")
            VALUES ($1,$2);
    `;
    pool
        .query(queryText, [ newTask.name, newTask.isComplete])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(err => {
            console.log('Errot adding task to POST', err);
            res.sendStatus(500);
        });
});

module.exports = toDoRouter;