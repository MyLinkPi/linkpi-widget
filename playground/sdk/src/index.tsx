import { AlertOutlined } from "@ant-design/icons";
import { defineWidget } from "@mylinkpi/widget-core";
import {
  useCurrentNode,
  useCurrentOrgId,
  useCurrentUser,
  usePiSDK,
  useTempateProp,
  useTempatePropList,
  useTemplateList,
  useWidgetSetting,
} from "@mylinkpi/widget-react";
import { Form, Input, Select } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import { allExpanded, defaultStyles, JsonView } from "react-json-view-lite";

import "react-json-view-lite/dist/index.css";
// @ts-expect-error type error
import styles from "./index.module.scss";

type BasicSDKExampleConfig = {
  templateId: string;
  propIndex?: number;
  searchValue: string;
};

const config = defineWidget<BasicSDKExampleConfig>()({
  icon: () => {
    return <AlertOutlined />;
  },
  basic: { defaultHeight: 4, defaultWidth: 4, minHeight: 2, minWidth: 2 },
  metadata: { templateId: "", searchValue: "" },
  render: () => {
    const currentUser = useCurrentUser();
    const orgId = useCurrentOrgId();
    const piSDK = usePiSDK();

    const [setting] = useWidgetSetting<BasicSDKExampleConfig>();
    const [result, setResult] = useState({});
    const propInfo = useTempateProp(setting.templateId, setting.propIndex || 0);

    const nodeData = useCurrentNode();

    useEffect(() => {
      (async () => {
        const res = await piSDK.getNodeList({
          orgId,
          pageSize: 20,
          page: 1,
          condition: [
            { key: "templateId", op: "intersect", input: [setting.templateId] },
            {
              key: "prop",
              index: setting.propIndex,
              op: propInfo?.type === "text" ? "textInclude" : "intersect",
              input: setting.searchValue,
              extends:
                propInfo?.type === "text"
                  ? {
                      type: "text",
                    }
                  : undefined,
            },
          ],
        });
        console.log("query result: ", res);
        setResult(res);
      })();
    }, [propInfo]);

    return (
      <div className={styles.content}>
        <h1></h1>
        <h4>{currentUser.name || "老王"}</h4>
        <div className={styles.json}>
          <JsonView
            data={result}
            shouldExpandNode={allExpanded}
            style={defaultStyles}
          />
        </div>
        <h4>当前节点: {nodeData.title}</h4>
        <div className={styles.json}>
          <JsonView
            data={nodeData}
            shouldExpandNode={allExpanded}
            style={defaultStyles}
          />
        </div>
      </div>
    );
  },
  setting: () => {
    const [form] = Form.useForm();
    const [setting, setSetting] = useWidgetSetting<BasicSDKExampleConfig>();
    const tempList = useTemplateList();
    const tempSelectOptions = useMemo(
      () =>
        tempList
          .filter((i) => i.status === 0)
          .map((i) => ({
            label: i.name,
            value: i.template_id,
          })),
      [tempList],
    );
    const templateId = Form.useWatch(["templateId"], form);
    const propList = useTempatePropList(templateId || "");
    const propSelectOptions = useMemo(
      () => propList.map((p) => ({ value: p.propIndex, label: p.name })),
      [propList],
    );
    const propIndex = Form.useWatch(["propIndex"], form);
    const propInfo = useTempateProp(templateId, propIndex);

    return (
      <Form
        form={form}
        layout="horizontal"
        initialValues={setting}
        onValuesChange={(_, values) => {
          setSetting(values);
        }}
      >
        <Form.Item label="主题类型" name="templateId">
          <Select options={tempSelectOptions} />
        </Form.Item>
        <Form.Item label="属性" name="propIndex">
          <Select options={propSelectOptions} />
        </Form.Item>
        {propInfo?.type === "text" && (
          <Form.Item label="搜索值" name="searchValue" key="text">
            <Input />
          </Form.Item>
        )}
        {propInfo?.type === "enum" && (
          <Form.Item label="搜索值" name="searchValue" key="enum">
            <Select
              mode="multiple"
              options={
                propInfo.extend?.map((i) => ({ label: i, value: i })) || []
              }
            />
          </Form.Item>
        )}
      </Form>
    );
  },
  preview: () => {
    const [setting] = useWidgetSetting<BasicSDKExampleConfig>();
    return (
      <div className={styles.content}>
        <h1>SDK示例</h1>
        preview
      </div>
    );
  },
});

export default config;
