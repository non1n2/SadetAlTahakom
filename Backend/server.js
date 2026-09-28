import "dotenv/config";
import express from "express";
import connectionDB  from "./config/connectionDB.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/users.js";
import projectsRouter from "./routes/projects.js";
import visitorTracker from "./auth/middleware.js";
import cors from "cors";


const app = express(); 

const port = 5000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true })); 

app.use(cookieParser());
app.use(visitorTracker);

connectionDB();

app.use("/user" , userRouter);
app.use("/projects" , projectsRouter);


app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json("Something Went Wrong");
});


app.listen(port , () => {
    console.log(`Server started on port ${port}`);
})