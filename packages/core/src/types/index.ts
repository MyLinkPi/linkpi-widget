import { FC, ReactNode } from "react";
import { JsonObject } from "type-fest";

export interface IWidgetBasic {
  maxCount?: number;
  minCount?: number;
  deletable?: boolean;
  movable?: boolean;
  copyable?: boolean;
  resizable?: boolean;
  // 可嵌套
  nested?: boolean;
  // 是否可以放入动态高度版块
  dynamicHeight?: boolean;
}

export interface IWidgetSize {
  /**
   * 右侧操作栏的宽度
   */
  settingWidth?: number;
  defaultHeight: number;
  defaultWidth: number;
  maxHeight?: number;
  maxWidth?: number;
  minHeight?: number;
  minWidth?: number;
}

export type WidgetSetting<T extends JsonObject = JsonObject> = FC<
  T & {
    id: string;
  }
>;

export type WidgetPreivew<T extends JsonObject = JsonObject> = FC<
  T & {
    id: string;
  }
>;

export type WidgetRender<T extends JsonObject = JsonObject> = FC<
  T & {
    id: string;
  }
>;

export interface IWidget<P extends string, T extends JsonObject = JsonObject> {
  render: WidgetRender;
  preview: WidgetPreivew;
  setting: WidgetSetting;
  id: P;
  title: string | ReactNode;
  icon: ReactNode | (() => ReactNode);
  basic: IWidgetSize & IWidgetBasic;
  metadata: T;
  onCreate?: () => Promise<T>;
}
