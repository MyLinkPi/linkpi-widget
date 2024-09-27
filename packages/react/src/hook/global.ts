import { CurrentUser, WidgetInstanceData } from "@linkpi/core";
import { NodeData, PiSDK } from "@linkpi/sdk";
import { pick } from "ramda";
import { FC, useContext, useMemo } from "react";

import { getGlobalContext } from "@/util";

const hackKey = "widget_utils";

type CurrentUserForWidget = Omit<CurrentUser, "organization">;
type TemplateInfo = CurrentUser.TemplateInfo;
type TemplateList = Pick<
  CurrentUser.TemplateInfo,
  "template_id" | "name" | "status"
>[];
type TemplatePropList = (Pick<CurrentUser.TemplateProp, "name" | "type"> & {
  propIndex: number;
})[];

type NodeTreeData = {
  value: string;
  title: string;
  children: NodeTreeData[];
  disabled?: boolean;
};

export const getWidgetUtilsContext = () =>
  getGlobalContext(hackKey, {
    useUrlQuerys: <T extends Record<string, string>>() => ({}) as unknown as T,
    useCurrentUser: () => ({}) as unknown as CurrentUserForWidget,
    useCurrentOrgId: () => "" as string,
    useTemplateList: (_orgId: string) => [] as TemplateList,
    useTemplateInfo: (_orgId: string, _templateId: string) =>
      ({}) as TemplateInfo | undefined,
    piSDK: {} as PiSDK,
    useCurrentNode: () => ({}) as NodeData,
    useNodeTreeData: () => [] as NodeTreeData[],
    useJumpNode: () => ({
      jump: (_nodeId: string, _viewId: string) => {},
    }),
    useNodeContentModalClose: () => ({
      close: () => {},
    }),
    NodeViewComponent: ((_props) => null) as FC<{
      nodeId: string;
      viewId: string;
    }>,
    useWidgetInstancesByWidgetId: (_widgetId: string) => [] as WidgetInstanceData[],
  });

export const useUrlQuerys = <
  T extends Record<string, string> = Record<string, string>,
>() => {
  const context = getWidgetUtilsContext();
  const { useUrlQuerys: _useUrlQuerys } = useContext(context);

  return _useUrlQuerys<T>();
};

/**
 * 获取当前登录的账户信息
 */
export const useCurrentUser = () => {
  const context = getWidgetUtilsContext();
  const { useCurrentUser: _useCurrentUser } = useContext(context);

  const currentUser = _useCurrentUser();

  return currentUser;
};

/**
 * 获取空间 id
 */
export const useCurrentOrgId = () => {
  const context = getWidgetUtilsContext();
  const { useCurrentOrgId: _useCurrentOrgId } = useContext(context);

  const orgId = _useCurrentOrgId();

  return orgId;
};

/**
 * 获取主题类型的配置
 */
export const useTempateInfo = (templateId: string) => {
  const context = getWidgetUtilsContext();
  const orgId = useCurrentOrgId();
  const { useTemplateInfo: _useTempateInfo } = useContext(context);

  return _useTempateInfo(orgId, templateId);
};

/**
 * 获取主题类型的列表
 */
export const useTemplateList = () => {
  const context = getWidgetUtilsContext();
  const orgId = useCurrentOrgId();
  const { useTemplateList: _useTemplateList } = useContext(context);

  return _useTemplateList(orgId);
};

/**
 * 获取主题类型的属性列表
 */
export const useTempatePropList = (templateId: string) => {
  const tempInfo = useTempateInfo(templateId);

  const propList = useMemo(
    () =>
      (tempInfo?.prop
        .map((p, propIndex) => ({
          ...p,
          propIndex,
        }))
        .filter((p) => p.name && p.type)
        .map((p) => pick(["name", "type", "propIndex"], p)) ||
        []) as unknown as TemplatePropList,
    [tempInfo?.prop]
  );

  return propList;
};

/**
 * 获取主题类型的属性配置
 */
export const useTempateProp = (templateId: string, propIndex: number) => {
  const tempInfo = useTempateInfo(templateId);

  const propInfo = useMemo(() => {
    return tempInfo?.prop?.[propIndex];
  }, [propIndex, tempInfo?.prop]);

  return propInfo;
};

export const usePiSDK = () => {
  const context = getWidgetUtilsContext();
  const { piSDK } = useContext(context);

  return piSDK;
};

/**
 * 获取当前节点信息
 */
export const useCurrentNode = () => {
  const context = getWidgetUtilsContext();
  const { useCurrentNode: _useCurrentNode } = useContext(context);

  return _useCurrentNode();
};

export const useNodeTreeData = () => {
  const context = getWidgetUtilsContext();
  const { useNodeTreeData: _useNodeTreeData } = useContext(context);

  return _useNodeTreeData();
};

export const useJumpNode = () => {
  const context = getWidgetUtilsContext();
  const { useJumpNode: _useJumpNode } = useContext(context);

  return _useJumpNode();
};

export const useNodeContentModalClose = () => {
  const context = getWidgetUtilsContext();
  const { useNodeContentModalClose: _useNodeContentModalClose } = useContext(context);

  return _useNodeContentModalClose();
};

export const useWidgetInstancesByWidgetId = (widgetId: string) => {
  const context = getWidgetUtilsContext();
  const { useWidgetInstancesByWidgetId: _useWidgetInstancesByWidgetId } = useContext(context);

  return _useWidgetInstancesByWidgetId(widgetId);
};
