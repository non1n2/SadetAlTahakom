import express from "express";
import {db} from "../config/connectionDB.js";


const router = express.Router();


router.post("/" ,async(req,res ,next) => {

    try {

        const visitorId = req.cookies.visitorId;
        const project = req.query.project;


        const result = await db.query (`
            UPDATE users 
            SET focus_on = $1
            WHERE visitor_id = $2
              RETURNING *
            `,[project,visitorId]);

        const response = result.rows;

       
        res.status(201).json(response);

    }
    catch(err) {
      next(err);
    }
});



export default router;