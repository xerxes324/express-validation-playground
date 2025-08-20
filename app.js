const express = require("express");
const app = express();
const usersRouter = require("./routes/usersRouter");

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use("/", usersRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error)=>{
    if ( error ){
        throw error;
    }

    console.log(`The app is listening on port ${PORT}`);
})
