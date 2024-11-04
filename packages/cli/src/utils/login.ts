import { asyncLogin, getAdTokenSync } from "@mylinkpi/cli-login";
import consola from "consola";

import { LOGIN_ENV_MAP } from "../constants.js";

export const getAdToken = () => {
  return getAdTokenSync();
};

export const checkLogin = () => {
  const adToken = getAdToken();
  return adToken.ad !== "";
};

export const loginLinkPi = async (env: "elecwatt" | "linkpi" = "linkpi") => {
  const isLogged = checkLogin();
  if (!isLogged) {
    consola.start("Login...");
    const loginSuccess = await asyncLogin(LOGIN_ENV_MAP[env]);
    if (!loginSuccess) {
      consola.error("Login failed...");
      process.exit(1);
    }
  }
};
