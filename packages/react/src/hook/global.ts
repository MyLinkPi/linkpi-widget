import { useContext } from "react";

import { getGlobalContext } from "../util";

const hackKey = "widget_utils";

export const getWidgetUtilsContext = () =>
  getGlobalContext(hackKey, {
    useUrlQuerys: <T extends Record<string, string>>() => ({}) as unknown as T,
  });

export const useUrlQuerys = <
  T extends Record<string, string> = Record<string, string>,
>() => {
  const context = getWidgetUtilsContext();
  const { useUrlQuerys: _useUrlQuerys } = useContext(context);

  return _useUrlQuerys<T>();
};
