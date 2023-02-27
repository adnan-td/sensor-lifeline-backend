import { sign, verify } from "jsonwebtoken";

export const createTokens = (data: any) => {
  const refreshToken = sign(data, process.env.REFRESH_TOKEN_SECRET || "", {
    expiresIn: "7d",
  });
  const accessToken = sign(data, process.env.ACCESS_TOKEN_SECRET || "", {
    expiresIn: "15min",
  });
  return { refreshToken, accessToken };
};

export const accessOptions = { maxAge: 1000 * 60 * 15, httpOnly: true };
export const refreshOptions = { maxAge: 1000 * 60 * 60 * 24 * 3, httpOnly: true };
