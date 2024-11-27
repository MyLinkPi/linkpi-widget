import { SSO_TOKEN_STORAGE_KEY } from "@linkpi/core";
import { useLocalStorageValue } from "@react-hookz/web";

export const useSSOToken = () => {
  const { value } = useLocalStorageValue(SSO_TOKEN_STORAGE_KEY);
  return value;
};
