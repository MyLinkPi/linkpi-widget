import { useContext } from "react";
import { JsonObject } from "type-fest";

import { getGlobalContext, Updater } from "@/util";

const hackKey = "widget_setting";

/**
 * 返回单例的 context
 */
export const getWidgetSettingContext = <
  T extends JsonObject = JsonObject,
>() =>
  getGlobalContext(hackKey, {
    value: {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setValue: (_newValue: T) => {},
  });

export const useWidgetSetting = <T extends JsonObject = JsonObject>() => {
  const WidgetSettingContext = getWidgetSettingContext();
  const { value, setValue } = useContext(WidgetSettingContext);

  return [value as T, setValue as (arg: T | Updater<T>) => void] as const;
};
