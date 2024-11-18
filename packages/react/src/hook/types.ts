export type ICascaderValue = {
  value: string;
  templateId: string;
  level: number;
};

export type ICascaderValues = ICascaderValue[] | ICascaderValue[][];

export type IDateValues = {
  selected: string;
  selectedType: "year" | "month" | "date";
};

export type GlobalConditionFilterValue = Record<
  string,
  // 级联
  | ICascaderValues
  // 日期
  | IDateValues
  // 单值
  | string
  // 多值
  | string[]
  // 数字
  | number
  // 时间范围
  | [number, number, number | undefined | null]
  | undefined
>;
