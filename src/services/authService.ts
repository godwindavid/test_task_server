import * as jwt from "jsonwebtoken";

export const login = async (user: { name: string; email: string }) => {
  try {
    const token = await jwt.sign(user, process.env.JWT_SECRET_KEY as string, {
      expiresIn: "12h",
    });
    return { ...user, token };
  } catch (error) {
    throw error;
  }
};