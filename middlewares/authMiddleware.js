import JWT from "jsonwebtoken";

export const requireSignin = async (req, res, next) => {
  try {
    // Extract the token from the authorization header
    const token = req.headers.authorization.split(" ")[1]; // Assuming Bearer token

    // Verify the token
    const decode = JWT.verify(token, process.env.JWT_SECRET);

    // Set the decoded user information on the request object
    req.user = decode;

    // Call the next middleware
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Invalid token" });
  }
};
