import { createElement, FC, useContext } from "react";

import { getWidgetUtilsContext } from "@/hook";

/**
 * 全局筛选表单项选择组件
 *
 * 级联选择
 */
export const GlobalConditionFilterItemSelect: FC<{
  value?: [string, string];
  onChange?: (value?: [string, string]) => void;
}> = (props) => {
  const context = getWidgetUtilsContext();
  const {
    GlobalConditionFilterItemSelect: InnerGlobalConditionFilterItemSelect,
  } = useContext(context);

  return createElement(InnerGlobalConditionFilterItemSelect, props);
};
