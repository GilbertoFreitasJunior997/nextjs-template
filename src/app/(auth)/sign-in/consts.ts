export const SIGN_IN_INVALID_ERROR_MESSAGE = "Incorrect email or password";

const baseSignInRoute = "/api/sign-in";

export const signInConfig = {
  googleRoute: `${baseSignInRoute}/google`,
  githubRoute: `${baseSignInRoute}/github`,
};
