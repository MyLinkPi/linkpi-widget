import { UnknownObject } from "@mylinkpi/widget-core";
import { useContext } from "react";

import { getGlobalContext, Updater } from "@/util";

const hackKey = "widget_setting";

/**
 * 返回单例的 context
 */
export const getWidgetSettingContext = <
  T extends UnknownObject = UnknownObject,
>() =>
  getGlobalContext(hackKey, {
    value: {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setValue: (_newValue: T) => {},
  });

export const useWidgetSetting = <T extends UnknownObject = UnknownObject>() => {
  const WidgetSettingContext = getWidgetSettingContext();
  const { value, setValue } = useContext(WidgetSettingContext);

  return [value as T, setValue as (arg: T | Updater<T>) => void] as const;
};
