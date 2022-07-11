const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getCompliments, deleteCompliments, allCapsify, addCompliment} = require('./controller')

app.get("/api/compliment/", getCompliment);
app.get("/api/compliments/", getCompliments);
app.post("/api/compliment/", allCapsify);
app.put("/api/compliments/", addCompliment);
app.delete("/api/compliments/", deleteCompliments);


app.listen(4000, () => console.log("Server running on 4000"));
