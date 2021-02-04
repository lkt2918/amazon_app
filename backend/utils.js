import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
    return jwt.sign(
        {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        },
        process.env.JWT_SECRET || "sometingsecret",
        {
            expiresIn: '30d',
        }
    );
};

//as a middleware to get the user Id in orderRouter
export const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (authorization) {
      const token = authorization.slice(7, authorization.length); // Bearer XXXXXX
      jwt.verify(
        token,
        process.env.JWT_SECRET || 'somethingsecret',
        (err, decode) => {
          if (err) {
            res.status(401).send({ message: 'Invalid Token' });
          } else {
            //decode has the information of token  
            req.user = decode;
            next();
          }
        }
      );
    } else {
      res.status(401).send({ message: 'No Token' });
    }
  };