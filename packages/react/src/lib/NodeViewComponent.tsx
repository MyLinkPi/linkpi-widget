import { createElement, FC, useContext } from "react";

import { getWidgetUtilsContext } from "@/hook";

export const NodeViewComponent: FC<{
  nodeId: string;
  viewId: string;
}> = (props) => {
  const context = getWidgetUtilsContext();
  const { NodeViewComponent: InnertNodeViewComponent } = useContext(context);

  return createElement(InnertNodeViewComponent, props);
};
