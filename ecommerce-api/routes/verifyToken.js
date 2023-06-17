const jwt = require ("jsonwebtoken");

const verifyToken = (req, resp, next)=>{
    const authHeader = req.headers.token;
    if(authHeader){
        const tokenreal = authHeader.split(" ")[1];

        jwt.verify(tokenreal, process.env.JWT_SEC, (err, user)=>{
            if(err){
                resp.status(403).json("Token is not valid.!");
            }
                req.user = user;
                next();
            
        })
    }else{
        return resp.status(401).json("You are not Authenticated! Contact to Nitin!");
    }
}


const verifyTokenandAuthorization = (req, resp, next)=>{
    console.log("verifyTokenandAuthorization  called.")
    verifyToken(req, resp, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            console.log("Checking user id and param id.");
            next();
        }else {
            resp.status(403).json("You are not allowed to that..!");
        } 
    })
}


const verifyTokenandAdmin= (req, resp, next)=>{
    console.log("VerifyTokenandAdmin is called.!");
    verifyToken(req, resp, ()=>{
        if(req.user.isAdmin){
            next();
        } else {
            resp.status(403).json("You are not allowed to that.! Contact to Nitin.");
        }
    })
}
module.exports = { verifyTokenandAdmin, verifyToken , verifyTokenandAuthorization}


