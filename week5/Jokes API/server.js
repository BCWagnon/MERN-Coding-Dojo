const express = require("express");
const app = express();
    
require("./config/mongoose.config.js");
    
app.use(express.json(), express.urlencoded({ extended: true }));
    
const AllMyUserRoutes = require("./routes/jokes.routes.js");
AllMyUserRoutes(app);
    
app.listen(8000, () => console.log("The server is all fired up on port 8000"));
