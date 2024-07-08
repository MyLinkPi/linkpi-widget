import { defineWidget } from "@mylinkpi/widget-core";
import React from "react";
import { Form, Input } from "antd";
import { AlertOutlined } from "@ant-design/icons";
import {
  useCurrentUser,
  useWidgetSetting,
  useWidgetSharedState,
  ViewList
} from "@mylinkpi/widget-react";

// @ts-ignore
import styles from "./index.module.scss";

type BasicExampleConfig = {
  title: string;
};

const config = defineWidget<BasicExampleConfig>()({
  id: "BasicExample",
  title: "基本示例",
  icon: () => {
    return <AlertOutlined />;
  },
  basic: { defaultHeight: 8, defaultWidth: 8, minHeight: 8, minWidth: 8 },
  metadata: { title: "默认" },
  render: () => {
    const [sharedState, setSharedState] = useWidgetSharedState<{
      globalText: string;
    }>();
    const currentUser = useCurrentUser();

    const [setting] = useWidgetSetting<BasicExampleConfig>();
    return (
      <div>
        <h3>{"hello world: " + setting.title}</h3>
        <h4>{currentUser.name || "老王"}</h4>
        <Form>
          <Form.Item>
            <Input
              value={sharedState.globalText}
              onChange={(e) => {
                setSharedState((draft) => {
                  draft.globalText = e.target.value;
                });
              }}
            />
          </Form.Item>
        </Form>
      </div>
    );
  },
  setting: () => {
    const [setting, setSetting] = useWidgetSetting<BasicExampleConfig>();

    return (
      <Form>
        <Form.Item label="标题">
          <Input
            defaultValue={setting.title}
            onChange={(e) => {
              // 直接设置
              // setSetting({ title: e.target.value });

              // 单独设置字段
              setSetting((draft) => {
                draft.title = e.target.value;
              });
            }}
          />
        </Form.Item>
      </Form>
    );
  },
  preview: () => {
    const [setting] = useWidgetSetting<BasicExampleConfig>();
    return (
      <div className={styles.content}>
        <h1>{setting.title}</h1>
        preview
      </div>
    );
  },
});

export default config;
