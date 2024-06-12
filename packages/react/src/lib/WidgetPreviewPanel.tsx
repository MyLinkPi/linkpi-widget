import { IWidget } from "@mylinkpi/widget-core";
import { Layout, Card, Row, Col, Typography } from "antd";
import { useMemo, useState, type FC } from "react";

import styles from "./WidgetPreviewPanel.module.css";
import { WidgetSettingContext } from "../hook";

const { Header, Content, Footer } = Layout;

export const WidgetPreviewPanel: FC<{
  config: IWidget<string, Record<string, any>>;
}> = ({ config }) => {
  const [widgetInstanceConfig, setWidgetInstanceConfig] = useState({
    ...config.metadata,
  });

  const contextValue = useMemo(
    () => ({
      value: widgetInstanceConfig,
      setValue: setWidgetInstanceConfig,
    }),
    [widgetInstanceConfig],
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
    <WidgetSettingContext.Provider value={contextValue}>
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
    </WidgetSettingContext.Provider>
  );
};
