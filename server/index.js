const express = require("express")
const app = express();

app.get("/",(req,res) => {
    res.send("I am a end point");
});
app.listen(7777,()=>{
    console.log("Listeninng on port 777");
});