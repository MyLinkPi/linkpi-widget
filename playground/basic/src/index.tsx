import { AlertOutlined } from "@ant-design/icons";
import { defineWidget } from "@mylinkpi/widget-core";
import {
  getWidgetUtilsContext,
  useA,
  useCurrentUser,
  useGlobalConditions,
  useNodeContentModalClose,
  usePiSDK,
  useSetExtraGlobalConditions,
  useWidgetInstanceList,
  useWidgetInstancesByWidgetId,
  useWidgetSetting,
  useWidgetSharedState,
} from "@mylinkpi/widget-react";
import { Button, Form, Input, TimePicker } from "antd";
import dayjs from "dayjs";
import React from "react";
import { useState } from "react";

// @ts-expect-error type error
import styles from "./index.module.scss";

type BasicExampleConfig = {
  title: string;
};

// const useSetExtraGlobalConditions = () => {
//   // const context = getWidgetUtilsContext();
//   // const { useSetExtraGlobalConditions: _useSetExtraGlobalConditions } = useContext(context);

//   // return _useSetExtraGlobalConditions;

//   const [a, setA] = useState();
//   console.log("a", a);
//   const setGlobalConditions = (key, data) => {
//     setA({ key, data });
//   };

//   return setGlobalConditions;
// };

const config = defineWidget<BasicExampleConfig>()({
  icon: () => {
    return <AlertOutlined />;
  },
  basic: { defaultHeight: 8, defaultWidth: 8, minHeight: 8, minWidth: 8 },
  metadata: { title: "默认" },
  render: ({ id }) => {
    console.log(id);
    const [sharedState, setSharedState] = useWidgetSharedState<{
      globalText: string;
    }>();
    const currentUser = useCurrentUser();
    const { close } = useNodeContentModalClose();

    const [setting] = useWidgetSetting<BasicExampleConfig>();
    console.log("setting", setting);

    const instances = useWidgetInstanceList();
    console.log("instances", instances);

    const ins = useWidgetInstancesByWidgetId("BasicExample111");

    console.log("ins,", ins);

    const piSDK = usePiSDK();
    console.log("piSDK,", piSDK);

    const utils = getWidgetUtilsContext();
    console.log("utils,", utils);

    const globalCondition = useGlobalConditions("UZUS-GuBvB8C6ON7btLU6");
    console.log("globalCondition,", globalCondition);

    const setGlobalConditions = useSetExtraGlobalConditions();

    const handlesetGlobalConditions = () => {
      setGlobalConditions("UZUS-GuBvB8C6ON7btLU6", [{ key: "status", input: [5], op: "beIncluded" }]);
    };

    return (
      <div>
        <Button onClick={handlesetGlobalConditions}>setGlobalConditions</Button>
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
        <Button onClick={close}>关闭</Button>
      </div>
    );
  },
  setting: () => {
    const [setting, setSetting] = useWidgetSetting<BasicExampleConfig>();

    const instances = useWidgetInstanceList();
    console.log("instances", instances);

    const ins = useWidgetInstancesByWidgetId("BasicExample111");

    console.log("ins,", ins);

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
        <Form.Item label="时间">
          <TimePicker value={dayjs() as any} />
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
