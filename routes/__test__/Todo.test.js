const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const request = require('supertest');
const todoRoutes = require("../../routes/Todo");
jest.useFakeTimers();

describe('Todo Routes Tests', () => {
    let requestTest

    beforeAll(() => {
        const app = express();
        mongoose
            .connect("mongodb+srv://fedesoft2:12345678902@cluster0.vte0q.mongodb.net/todoapp?retryWrites=true&w=majority", {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
            })
            .then(() => {
                console.log("CONNECTED TO DATABASE");
            });
        app.use(cors());
        app.use(bodyParser.json());
        app.use("/api", todoRoutes);
        requestTest = request(app);
    })

    it('GET /todos', () => {
        requestTest
            .get('/api/todos/')
            .expect(200)
    })

})