export const generateAccessToken = user => {
  return jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: "1800s" });
};
