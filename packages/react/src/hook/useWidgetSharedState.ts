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
    value: null,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setValue: (_newValue: T) => {},
  });

export const useWidgetSharedState = <
  T extends UnknownObject = UnknownObject,
>() => {
  const WidgetSharedStateContext = getWidgetSharedStateContext();
  const { value, setValue } = useContext(WidgetSharedStateContext);

  if (!value)
    throw Error(
      "useWidgetSharedState 使用位置不正确！仅可用于 widget render 组件内",
    );

  return [value as T, setValue as (arg: T | Updater<T>) => void] as const;
};
