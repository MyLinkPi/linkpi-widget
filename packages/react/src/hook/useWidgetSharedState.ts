import { UnknownObject } from "@mylinkpi/widget-core";
import { createContext, useContext } from "react";
import { Updater } from "../utils";

const hackKey = "__mylinkpi__fixme__widget_shared_state_context__";

/**
 * 返回单例的 context
 */
export const getWidgetSharedStateContext = <
  T extends UnknownObject = UnknownObject,
>() => {
  if (!window[hackKey as any]) {
    // @ts-ignore
    window[hackKey as any] = createContext({
      value: null,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      setValue: (_newValue: T) => {},
    });
  }
  return window[hackKey as any] as unknown as React.Context<{
    value: T;
    setValue: (_newValue: T) => void;
  }>;
};


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
