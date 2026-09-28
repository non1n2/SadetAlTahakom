import { v4 as uuidv4 } from 'uuid';


const visitorTracker  = async (req, res, next) => {

        try{

            let visitorId  = req.cookies.visitorId;

            if(!visitorId) {

                visitorId = uuidv4();

                res.cookie("visitorId" ,visitorId , {
                    httpOnly : true ,
                    secure : process.env.NODE_ENV === "production" ,
                    sameSite : "lax",
                    maxAge : 30 * 24 * 60 * 60 * 1000 ,
                });

            console.log("New Visitor:", visitorId);

            }

            else {
                console.log("Old Visitor:", visitorId);
            }

            next();

        }
        catch(err) {
            console.log(err);
            next();
        }
} 


export default visitorTracker  ;