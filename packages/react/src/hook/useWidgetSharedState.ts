import { UnknownObject } from "@mylinkpi/widget-core";
import { useContext } from "react";

import { getGlobalContext, Updater } from "../util";

const hackKey = "widget_shared_state";

/**
 * 返回单例的 context
 */
export const getWidgetSharedStateContext = <
  T extends UnknownObject = UnknownObject,
>() =>
  getGlobalContext(hackKey, {
    value: {} as T,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setValue: (_newValue: T) => {},
  });

export const useWidgetSharedState = <
  T extends UnknownObject = UnknownObject,
>() => {
  const WidgetSharedStateContext = getWidgetSharedStateContext();
  const { value, setValue } = useContext(WidgetSharedStateContext);

  return [value as T, setValue as (arg: T | Updater<T>) => void] as const;
};
