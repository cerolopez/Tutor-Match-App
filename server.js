import express from "express";
const app = express();
import dotenv from "dotenv";
import bodyParser from "body-parser";
import passport from "passport";
<<<<<<< HEAD

=======
import tutor from "./routers/tutors.js";
import test from "./routers/test.js";
import cors from "cors";
>>>>>>> 648af9d (saving changes)
// require("./config/passport")(app);
// import register from "./routes/register";
// import login from "./routers/login";
// import auth from "./routes/auth";

import tutor from "./routers/tutors.js";

import session from "express-session";
// import { dirname } from "path";
// import { fileURLToPath } from 'url';

// const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(cors());
dotenv.config();
const PORT = process.env.PORT || 5001;

// use passport here
// export default = (passport) => {

// }

// app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    // store:
  })
);

app.use(passport.authenticate("session"));

app.get("/", (req, res) => {
  res.send("welcome");
});

app.use("/", tutor);
app.use("/", test);

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
