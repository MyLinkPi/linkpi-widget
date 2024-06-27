import { CurrentUser, PiNodeMetaData } from "@linkpi/core";
import { PiSDK } from "@linkpi/sdk";
import { useContext, useMemo } from "react";
import { pick } from "ramda";

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
type PiNode = {
  id: string;
  title: string;
  creator: string;
  createTime: number;
  updateTime: number;
  tempInfo: {
    id: string;
    nodeSeq: number | null;
    prop: any[];
    statusProp: any[];
    status: number;
  };
  prop: PiNodeMetaData["e"];
  status: CurrentUser.taskStatus[] | undefined;
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
    useCurrentNode: () => ({}) as PiNode,
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
    [tempInfo?.prop],
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
