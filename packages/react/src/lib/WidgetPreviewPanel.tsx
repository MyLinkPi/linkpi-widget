import { IWidget } from "@mylinkpi/widget-core";
import { Card, Col, Layout, Row, Typography } from "antd";
import { produce } from "immer";
import qs from "query-string";
import { type FC, useCallback, useMemo, useState } from "react";
import { JsonObject } from "type-fest";

import {
  getWidgetSettingContext,
  getWidgetSharedStateContext,
  getWidgetUtilsContext,
  Updater,
} from "@/hook";
import { GlobalConditionFilterValue } from "@/hook/types";

// @ts-ignore
import styles from "./WidgetPreviewPanel.module.css";

const { Header, Content, Footer } = Layout;

const useUrlQuerys = <
  T extends Record<string, string> = Record<string, string>,
>() => qs.parse(window.location.search) as T;

// TODO 支持 mock 数据
const widgetUtilsContextValue = {
  useUrlQuerys,
  useCurrentUser: () => ({}) as any,
  useCurrentOrgId: () => "",
  useTemplateList: () => [],
  useTemplateInfo: () => ({}) as any,
  piSDK: {} as any,
  useCurrentNode: () => ({}) as any,
  useNodeTreeData: () => [],
  useJumpNode: () => ({ jump: () => {} }),
  useNodeContentModalClose: () => ({ close: () => {} }),
  NodeViewComponent: () => <div>指定视图</div>,
  useWidgetInstanceList: () => [],
  useWidgetInstancesByWidgetId: () => [],
  DataSourceSettingWidgetSetting: () => <div>数据源设置</div>,
  GlobalConditionFilterLink: () => <div>link</div>,
  useWidgetInstanceListByGroupId: () => [],
  useGlobalConditions: () => [],
  useSetExtraGlobalConditions: () => {
    return () => {};
  },
  useGlobalConditionFilterValue: () => ({}) as GlobalConditionFilterValue,
  useAllGlobalConditionFilterValue: () =>
    ({}) as Record<string, GlobalConditionFilterValue>,
  GlobalConditionFilterItemSelect: () => <div>筛选项-选择器</div>,
  ViewSelect: () => <div>视图选择器</div>,
  TemplateSelect: () => <div>模板选择器</div>,
};

export const WidgetPreviewPanel: FC<{
  config: IWidget<string, Record<string, any>>;
}> = ({ config }) => {
  const WidgetUtilsContext = getWidgetUtilsContext();

  const WidgetSettingContext = getWidgetSettingContext();
  const [widgetInstanceConfig, setWidgetInstanceConfig] = useState({
    ...config.metadata,
  });
  const setWidgetSettingContextValue = useCallback(
    (config: JsonObject | Updater<JsonObject>) => {
      if (typeof config === "object") {
        setWidgetInstanceConfig(config);
        return;
      }

      if (typeof config === "function") {
        setWidgetInstanceConfig(produce(config as any));
        return;
      }

      throw Error("setValue 参数类型不对");
    },
    []
  );
  const widgetSettingContextValue = useMemo(
    () => ({
      value: widgetInstanceConfig,
      setValue: setWidgetSettingContextValue,
    }),
    [setWidgetSettingContextValue, widgetInstanceConfig]
  );

  const WidgetSharedStateContext = getWidgetSharedStateContext();
  const [widgetSharedState, setwidgetSharedState] = useState({});
  const setWidgetSharedStateContextValue = useCallback(
    (config: JsonObject | Updater<JsonObject>) => {
      if (typeof config === "object") {
        setwidgetSharedState(config);
        return;
      }

      if (typeof config === "function") {
        setwidgetSharedState(produce(config as any));
        return;
      }

      throw Error("setValue 参数类型不对");
    },
    []
  );
  const widgetSharedStateContextValue = useMemo(
    () => ({
      value: widgetSharedState,
      setValue: setWidgetSharedStateContextValue,
    }),
    [setWidgetSharedStateContextValue, widgetSharedState]
  );

  const [tab, setTab] = useState<string>("setting");
  const PreviewComponent = config.preview;
  const FormComponent = config.setting;
  const RenderComponent = config.render;

  const settingContent = (
    <Row className={styles.wrapper}>
      <Col flex="320px" style={{ padding: 8, paddingLeft: 0 }}>
        <div style={{ marginBottom: 8 }}>自定义组件</div>
        <div className={styles.iconItem}>
          {config.icon()}
          <span className={styles.iconItemLabel}>{config.title}</span>
        </div>
      </Col>
      <Col
        flex="auto"
        style={{
          border: "1px solid #f3f3f3",
          borderTop: 0,
          borderBottom: 0,
          padding: 8,
        }}
      >
        <PreviewComponent />
      </Col>
      <Col
        flex={
          config.basic.settingWidth ? config.basic.settingWidth + "px" : "300px"
        }
        style={{ padding: 8 }}
      >
        <FormComponent />
      </Col>
    </Row>
  );

  const previewContent = (
    <div className={styles.wrapper}>
      <RenderComponent />
    </div>
  );

  const tabContent = {
    setting: settingContent,
    preview: previewContent,
  };

  return (
    <WidgetUtilsContext.Provider value={widgetUtilsContextValue}>
      <WidgetSettingContext.Provider value={widgetSettingContextValue}>
        <WidgetSharedStateContext.Provider
          value={widgetSharedStateContextValue}
        >
          <Layout className="layout" style={{ minHeight: "100vh" }}>
            <Header></Header>
            <Content style={{ padding: 20 }}>
              <Card
                title="自定义组件开发"
                tabList={[
                  { tab: "配置", key: "setting" },
                  { tab: "预览", key: "preview" },
                ]}
                onTabChange={setTab}
              >
                {tabContent[tab as keyof typeof tabContent]}
              </Card>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              <Typography.Link href="https://mylinkpi.com/home">
                @mylinkpi
              </Typography.Link>
            </Footer>
          </Layout>
        </WidgetSharedStateContext.Provider>
      </WidgetSettingContext.Provider>
    </WidgetUtilsContext.Provider>
  );
};
