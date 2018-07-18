import express from "express";
import HttpStatus from "http-status-codes";
import body_parser from "body-parser";

import low from "lowdb";
import FileAsync from "lowdb/adapters/FileAsync";

import { resolve } from "path";
import fs from "fs";

const defaultPort = 5001;
const port = process.env.PORT || defaultPort;

const users = JSON.parse(fs.readFileSync("users.json"));
const userData = users["users"];

low(new FileAsync("db.json"))
    .then(db => {
        let eggs = userData.map(el => ({
            name: el.name,
            count: 0
        }));
        db.defaults({ eggs }).write();
        return db;
    })
    .then(db => {
        const app = express();

        app.use(body_parser.json({ strict: false }));

        // TODO login
        app.post("/login", (req, res) => {
            let id = req.body.id;
            if (!id) {
                res.status(HttpStatus.BAD_REQUEST)
                    .send("Bad Login Request");
            } else if (!userData.includes(id)) {
                res.json({
                    login: "failed",
                    reason: "user does not exist"
                });
            } else {
                res.send("too bad");
            }
        });

        app.use(express.static(resolve(__dirname, "../client/build/")));

        // Serve client files
        app.get("/", (req, res) => {
            res.sendFile(resolve(__dirname, "../client/build/index.html"));
        });

        app.get("/users", (req, res) => res.json(db.get('eggs').value()));

        app.listen(port, () => console.log(`listening on http://localhost:${port}`));
    })
    .catch(err => console.log(err));
