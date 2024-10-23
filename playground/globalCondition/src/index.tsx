import { AlertOutlined } from "@ant-design/icons";
import { defineWidget } from "@mylinkpi/widget-core";
import {
  DataSourceSettingWidgetSetting,
  useGlobalConditions,
  useWidgetSetting,
  ViewList,
} from "@mylinkpi/widget-react";
import { Form, Input } from "antd";
import React from "react";
import { allExpanded, defaultStyles, JsonView } from "react-json-view-lite";

import "react-json-view-lite/dist/index.css";
// @ts-expect-error type error
import styles from "./index.module.scss";

type BasicExampleConfig = {
  name: string;
};

const config = defineWidget<BasicExampleConfig>()({
  icon: () => {
    return <AlertOutlined />;
  },
  basic: { defaultHeight: 8, defaultWidth: 8, minHeight: 8, minWidth: 8 },
  metadata: { name: "应用全局筛选" },
  render: ({ id }) => {
    console.log("当前组件实例的 id", id);
    const conditions = useGlobalConditions(id);
    console.log("全局筛选", conditions);
    const [setting] = useWidgetSetting<BasicExampleConfig>();
    console.log("组件设置", setting.conditions);

    return (
      <div>
        <h1>全局筛选</h1>
        <div style={{ padding: 10, fontFamily: "monospace" }}>
          <JsonView
            data={conditions}
            shouldExpandNode={allExpanded}
            style={defaultStyles}
          />
        </div>
      </div>
    );
  },
  setting: () => {
    const [setting, setSetting] = useWidgetSetting<BasicExampleConfig>();
    return (
      <Form>
        <Form.Item label="组件名称">
          <Input
            defaultValue={setting.name}
            onChange={(e) => {
              // 直接设置
              // setSetting({ title: e.target.value });

              // 单独设置字段
              setSetting((draft) => {
                draft.name = e.target.value;
              });
            }}
          />
        </Form.Item>
        <Form.Item label="数据源">
          <DataSourceSettingWidgetSetting />
        </Form.Item>
      </Form>
    );
  },
  preview: () => {
    const [setting] = useWidgetSetting<BasicExampleConfig>();
    return (
      <div className={styles.content}>
        <h1>{setting.name}</h1>
        preview
      </div>
    );
  },
});

export default config;
