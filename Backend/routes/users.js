import express from "express";
import {db} from  "../config/connectionDB.js";


const router = express.Router();


router.post("/", async(req,res,next) => {
   
    try {

        const visitorId = req.cookies.visitorId;

        const oldUser = await db.query("SELECT * FROM users WHERE visitor_id = $1",[visitorId]);

        if(oldUser.rows.length > 0) {
            return res.status(200).json({message : "User is already exist"});
        }
        else {
            const result = await db.query("INSERT INTO users (visitor_id) VALUES ($1) RETURNING *",[visitorId]);

            const response = result.rows;

            res.status(201).json(response);
        }

    }
    catch(err) {
       next(err);
    }
})


export default router ;