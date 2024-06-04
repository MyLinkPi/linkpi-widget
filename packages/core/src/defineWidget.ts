import { IWidget } from "@linkpi/core";
export {
  IWidget,
  WidgetPreivew,
  WidgetRender,
  WidgetSetting,
} from "@linkpi/core";

type UnknownObject = Record<string, unknown>;

/**
 * 定义组件，并且做类型检查
 *
 * 如果你对接口的形式（curry）迟疑，take it
 * 问就是截止 2023-07-13，ts 最新版本 5.1 任然没有支持
 * partial type argument inference
 *
 * 相关 issue 详见：
 * - https://github.com/microsoft/TypeScript/issues/26242
 * - https://github.com/microsoft/TypeScript/pull/26349
 */
export const defineWidget =
  <T extends UnknownObject = UnknownObject>() =>
  <P extends string>(config: IWidget<P, T>) => {
    return config;
  };
