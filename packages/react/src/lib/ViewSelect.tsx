import { createElement, FC, useContext } from "react";

import { getWidgetUtilsContext } from "@/hook";

export const ViewSelect: FC<{
  value: string;
  onChange?: (
    value?: string,
    option?: { value: string; label: string; nodeId: string }
  ) => void;
}> = (props) => {
  const context = getWidgetUtilsContext();
  const { ViewSelect: InnertViewSelect } = useContext(context);

  return createElement(InnertViewSelect, props);
};
