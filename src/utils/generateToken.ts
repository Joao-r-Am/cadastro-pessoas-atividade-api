import jsonwebtoken from "jsonwebtoken";

export const PRIVATE_KEY = "1001";

export const generateToken = (userId: string) => {
  return jsonwebtoken.sign({ id: userId }, PRIVATE_KEY, { expiresIn: "60m" });
};
