import dotenv from "dotenv";
import app from "./app.js";
import connectToDB from "../DB/dbConnect.js";

dotenv.config();

connectToDB().then(() => {
 
    app.listen(process.env.PORT, () => console.log(`Server is Started at: ${process.env.PORT}`))

}).catch((e) => console.log(`${e}`));


