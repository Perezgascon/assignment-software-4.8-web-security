const jwt = require('jsonwebtoken');

// middleware to check if the user is authenticated
const authenticateJWT = (req, res, next) => {
    // get the token from the request header
    const token = req.headers.authorization;

    // check if the token exists
    if(token){
        // check if the token is valid
        jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
            if(err){
                // if the token is not valid, return an error
                return res.status(401).json({
                    message: 'Invalid token'
                });
            } else {
                // if the token is valid, set the user to the decoded user
                req.user = decoded;
                next();
            }
        });
    } else {
        // if the token does not exist, return an error
        return res.status(401).json({
            message: 'Token not found'
        });
    }
}

module.exports = {
    authenticateJWT
}