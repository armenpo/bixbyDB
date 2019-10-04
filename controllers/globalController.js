import Food from "../models/Food";
import routes from "../routes";

export const home = (req, res) => {
    console.log("hello home");
    res.render("home");
}