const express = require("express");
const data = require("./Userdata")
const cors = require("cors")
const port = 8081;
const app = express();
app.use(express.json());
app.use(cors())





app.get("/userdata", (req, res) => {
        const index = parseInt(Math.random() * 9)
        res.send(data[index])

})


app.listen(port, () => { console.log(`Server is up on ${port}`) })