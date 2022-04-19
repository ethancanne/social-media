//create an authentication middleware for the user routes using json web token
import jwt from "jsonwebtoken";
import { User } from "../models/User";

export const authenticate = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  try {
    const decoded = await jwt.verify(token, process.env.TOKEN_SECRET);

    const authenticatedUser = await User.findById(decoded._id);
    req.user = authenticatedUser;

    next();
  } catch (err) {
    return res.sendStatus(403);
  }
};
