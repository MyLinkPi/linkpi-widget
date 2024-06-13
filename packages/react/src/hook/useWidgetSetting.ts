import { UnknownObject } from "@mylinkpi/widget-core";
import { createContext, useContext } from "react";

const hackKey = "__mylinkpi__fixme__widget_setting_context__";

/**
 * 返回单例的 context
 */
export const getWidgetSettingContext = <
  T extends UnknownObject = UnknownObject,
>() => {
  if (!window[hackKey as any]) {
    // @ts-ignore
    window[hackKey as any] = createContext({
      value: {},
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      setValue: (_newValue: T) => {},
    });
  }
  return window[hackKey as any] as unknown as React.Context<{
    value: T;
    setValue: (_newValue: T) => void;
  }>;
};

export const useWidgetSetting = <T extends UnknownObject = UnknownObject>() => {
  const WidgetSettingContext = getWidgetSettingContext();
  const { value, setValue } = useContext(WidgetSettingContext);

  return [value as T, setValue as (arg: T) => void] as const;
};
