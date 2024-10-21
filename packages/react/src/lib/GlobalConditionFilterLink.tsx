import { createElement, FC, useContext } from "react";

import { getWidgetUtilsContext } from "@/hook";

export const GlobalConditionFilterLink: FC<{
  id: string;
  onShowBtnClick?: () => void;
}> = (props) => {
  const context = getWidgetUtilsContext();
  const { GlobalConditionFilterLink: InnertGlobalConditionFilterLink } =
    useContext(context);

  return createElement(InnertGlobalConditionFilterLink, props);
};
