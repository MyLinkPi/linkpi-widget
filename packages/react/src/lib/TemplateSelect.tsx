import { createElement, FC, useContext } from "react";

import { getWidgetUtilsContext } from "@/hook";

export const TemplateSelect: FC<{
  value?: string;
  onChange?: (value?: string) => void;
}> = (props) => {
  const context = getWidgetUtilsContext();
  const { TemplateSelect: InnertTemplateSelect } = useContext(context);

  return createElement(InnertTemplateSelect, props);
};
