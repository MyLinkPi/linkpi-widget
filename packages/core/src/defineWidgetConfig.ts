type WidgetConfig = {
  id: string;
  name: string;
  /**
   * 分组名称
   */
  comp_group?: string;
};

/**
 * 定义组件基本信息配置
 */
export const defineWidgetConfig = (config: WidgetConfig) => {
  return config;
};
