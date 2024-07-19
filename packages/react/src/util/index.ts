import { Draft } from "immer";
import { type Context, createContext } from "react";
import { JsonObject } from "type-fest";

export type Updater<T extends JsonObject> = (draft: Draft<T>) => void;

/**
 * 获取宿主环境提供的 context
 *
 * @param hackKey
 * @param defaultValue
 * @returns
 */
export const getGlobalContext = <T>(hackKey: string, defaultValue: T) => {
  const key = `__mylinkpi__fixme__${hackKey}__context__`;

  if (!window[key as any]) {
    // @ts-expect-error patch window
    window[key as any] = createContext(defaultValue);
  }

  return window[key as any] as unknown as Context<T>;
};
