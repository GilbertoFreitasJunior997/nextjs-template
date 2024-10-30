import { env } from "@/lib/env";
import { Google } from "arctic";
import { userService } from "../user";
import { GoogleUser } from "./types";

export const googleAuth = new Google(
  env.GOOGLE_CLIENT_ID,
  env.GOOGLE_CLIENT_SECRET,
  `${env.HOST_NAME}/api/login/google/callback`,
);

const { create, getByColumn } = userService;

export const googleService = {
  getAccountByGoogleId: async (googleId: string) => {
    const [user] = await getByColumn("googleId", googleId);

    return user;
  },
  createGoogleUser: async ({ email, name, sub: googleId }: GoogleUser) => {
    const createdUser = await create({ name, email, googleId });

    return createdUser;
  },
};
