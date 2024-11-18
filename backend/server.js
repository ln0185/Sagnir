// const express = require("express");
import express from "express";
import cors from "cors";
const app = express();
app.use(cors())

app.get("/", (req, res) =>  {
    const getData = async () => {
        const response = await fetch("https://thjodsogur.vegur.is/thjodsogur");
        const data = await response.json();
        console.log(data);
        res.json( data);
        return data;
    }

    getData();
});
app.listen(8080);