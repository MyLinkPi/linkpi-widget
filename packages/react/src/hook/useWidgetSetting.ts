import { UnknownObject } from "@mylinkpi/widget-core";
import { createContext, useContext } from "react";

export const WidgetSettingContext = createContext({
  value: {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setValue: (_newValue: UnknownObject) => {},
});

export const useWidgetSetting = <T extends UnknownObject = UnknownObject>() => {
  const { value, setValue } = useContext(WidgetSettingContext);

  return [value as T, setValue as (arg: T) => void] as const;
};
