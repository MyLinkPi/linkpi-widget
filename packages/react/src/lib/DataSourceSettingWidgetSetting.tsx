import { createElement, FC, useContext } from "react";

import { getWidgetUtilsContext } from "@/hook";

export const DataSourceSettingWidgetSetting: FC = () => {
  const context = getWidgetUtilsContext();
  const {
    DataSourceSettingWidgetSetting: InnertDataSourceSettingWidgetSetting,
  } = useContext(context);

  return createElement(InnertDataSourceSettingWidgetSetting);
};
