import { useContext } from "react";
import { JsonObject } from "type-fest";

import { getGlobalContext, Updater } from "@/util";

const hackKey = "widget_shared_state";

/**
 * 返回单例的 context
 */
export const getWidgetSharedStateContext = <T = JsonObject>() =>
  getGlobalContext(hackKey, {
    value: {} as T,

    setValue: (_newValue: T) => {},
  });

export const useWidgetSharedState = <T = JsonObject>() => {
  const WidgetSharedStateContext = getWidgetSharedStateContext();
  const { value, setValue } = useContext(WidgetSharedStateContext);

  return [value as T, setValue as (arg: T | Updater<T>) => void] as const;
};
