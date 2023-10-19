import { MappingAlgorithm, OverrideToken } from 'antd/es/theme/interface';

type ComponentsConfig = {
  [key in keyof OverrideToken]?: OverrideToken[key] & {
    algorithm?: boolean | MappingAlgorithm | MappingAlgorithm[];
  };
};
const baseComponentConfig: ComponentsConfig = {
  Layout: {
    headerHeight: 48,
    headerPadding: '0 24px',
    footerPadding: '16px 24px',
  },
};
export default baseComponentConfig;
