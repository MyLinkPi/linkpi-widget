# Pi SDK

Pi SDK 是连接派平台提供的核心 SDK，用于与平台进行交互。你可以通过 React Hook `usePiSDK` 来获取 SDK 实例。

## 核心方法

### updateNodeProp

更新节点属性。

```typescript
interface UpdateNodePropParams {
  orgId: string;      // 空间 ID
  nodeId: string;     // 节点 ID
  index: number[];    // 属性索引
  value: any[];       // 属性值
}

updateNodeProp(params: UpdateNodePropParams): Promise<void>
```

### addNode

添加新节点。该方法由 `PiNodeManager` 提供，用于创建新的节点。

```typescript
interface AddNodeParams {
  /**
   * 空间ID
   */
  orgId: string;

  /**
   * 主题类型ID，用于指定新节点的类型
   */
  templateId: string;

  /**
   * 节点属性值
   */
  initialProps: {
    [propIndex: number /** 属性索引 */]: any[] /** 属性值 */
  };

  /**
   * 父节点ID（可选）
   * 如果指定了父节点，新节点将作为其子节点创建
   */
  parentId?: string;

  /**
   * 插入位置索引（可选）
   * 用于指定在父节点的子节点列表中的插入位置
   */
  index?: number;
}

addNode(...args: Parameters<PiNodeManager["addNode"]>): Promise<void>
```

### getDbNodeList

获取数据库节点列表。

```typescript
interface GetDbNodeListParams {
  pageSize: number;
  page: number;
  orgId: string;
  condition: ViewList.ViewconditionV2;
  thmId?: string;  // 指定表头映射 id
  /**
   * API 数据源自定义参数
   */
  reqParams?: APIDataSourceParams;
  /**
   * @deprecated
   *
   * 废弃的匹配设置
   */
  matchings?: {
    origin?: number;
    target?: number;
    key: string;
  }[];
  currentNodeId?: string;
}

interface GetDbNodeListResult {
  status: string;
  result: TemplateNodeData[];
  total: number;
  page: number;
  // 其他返回字段
}

getDbNodeList(params: GetDbNodeListParams): Promise<GetDbNodeListResult>
```

### getNodeList

> ⚠️ 注意：此方法仅用于调试和演示，生产环境请使用 `getDbNodeList` 进行节点查询。

获取节点列表。

```typescript
interface GetNodeListParams {
  condition: any;
  orgId: string;
  page: number;
  pageSize: number;
}

getNodeList(params: GetNodeListParams): Promise<TemplateNodeData[]>
```

## 使用示例

```typescript
import { usePiSDK } from "@mylinkpi/widget-react";

function YourComponent() {
  const sdk = usePiSDK();

  // 更新节点属性
  await sdk.updateNodeProp({
    orgId: "org-id",
    nodeId: "node-id",
    index: [0], // 更新第一个属性
    value: ["新值"], // 设置新的属性值
  });

  // 获取节点列表
  const nodes = await sdk.getDbNodeList({
    pageSize: 10,
    page: 1,
    orgId: "org-id",
    condition: [
      // 查询条件
    ],
    type: "conditionFilterV2",
  });
}
```

---

注意：

1. 所有的异步方法都返回 Promise，在使用时需要通过 `await` 或者 `.then()` 来获取结果。
2. `getNodeList` 方法仅用于调试和演示，在生产环境中应使用 `getDbNodeList` 进行节点查询。
