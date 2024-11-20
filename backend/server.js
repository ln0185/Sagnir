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

app.get("/troll", (req, res) => {
    const getData = async () => {
        try {
        const response = await fetch("https://thjodsogur.vegur.is/thjodsogur/troll");
        if (!response.ok) {
            console.error("Failed to fetch");
        }
        const data = await response.json();
        res.json(data);
        return data;
        }
        catch (error) {
            console.error(error);
        }
    }
    getData();
})

app.get("/draugar", (req, res) => {
    const getData = async () => {
        try {
            const response = await fetch("https://thjodsogur.vegur.is/thjodsogur/draugar");
            if (!response.ok) {
                console.error("Failed to fetch");
            }
            const data = await response.json();
            res.json(data);
            return data;
            }
            catch (error) {
                console.error(error);
            }
    }
    getData();
})

app.get("/alfar-og-huldufolk", (req, res) => {
    const getData = async () => {
        try {
            const response = await fetch("https://thjodsogur.vegur.is/thjodsogur/alfar-og-huldufolk");
            if (!response.ok) {
                console.error("Failed to fetch");
            }
            const data = await response.json();
            res.json(data);
            return data;
        }
        catch (error) {
            console.error(error);
        }
    }
    getData();
})

app.get("/ur-efra-og-nedra-helgisogur", (req, res) => {
    const getData = async () => {
        try {
            const response = await fetch("https://thjodsogur.vegur.is/thjodsogur/ur-efra-og-nedra-helgisogur");
            if (!response.ok) {
                console.error("Failed to fetch");
            }
            const data = await response.json();
            res.json(data);
            return data;
        }
        catch (error) {
            console.error(error);
        }
    }
    getData();
})
app.listen(8080);