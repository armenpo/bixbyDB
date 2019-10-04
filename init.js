import app from "./app";
import "./db";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT

const handleListen = () => {
    console.log(`✅Listening on ${PORT}`);
}

app.listen(PORT, handleListen);