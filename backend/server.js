import express from "express";
import cors from "cors";
const app = express();
app.use(cors())

app.get("/", (req, res) =>  {
    const getData = async () => {
        const response = await fetch("https://thjodsogur-api.deno.dev/api/");
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
        const response = await fetch("https://thjodsogur-api.deno.dev/api/troll");
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
            const response = await fetch("https://thjodsogur-api.deno.dev/api/draug");
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

app.get("/alfa", (req, res) => {
    const getData = async () => {
        try {
            const response = await fetch("https://thjodsogur-api.deno.dev/api/alfa");
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
            const response = await fetch("https://thjodsogur-api.deno.dev/api/efra");
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

app.get("/:categoryName/:storyName", (req, res) => {
    const { categoryName, storyName } = req.params;

    const getData = async () => {
        try {
            const response = await fetch(`https://thjodsogur-api.deno.dev/api/${categoryName}/${storyName}`);
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

app.get("/all", (req, res) => {
    const getData = async () => {
        try {
            const [response1, response2, response3, response4] = await Promise.all([
                fetch("https://thjodsogur-api.deno.dev/api/troll"),
                fetch("https://thjodsogur-api.deno.dev/api/draug"),
                fetch("https://thjodsogur-api.deno.dev/api/alfa"),
                fetch("https://thjodsogur-api.deno.dev/api/efra")
            ]);

            const [data1, data2, data3, data4] = await Promise.all([
                response1.json(),
                response2.json(),
                response3.json(),
                response4.json()
            ]);

            const combinedData = [
                { category: "Troll", stories: data1 },
                { category: "Draugar", stories: data2 },
                { category: "Álfar og huldufólk", stories: data3 },
                { category: "Ur Efra og Nedra Helgisögur", stories: data4 }
            ];

            res.json(combinedData);
        }
        catch (error) {
            console.error(error);

        }
    }

    getData();
})
app.listen(8080);
