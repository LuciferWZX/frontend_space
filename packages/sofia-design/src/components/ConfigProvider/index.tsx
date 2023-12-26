import { ConfigProviderProps } from './interface';
import omit from '../_util/omit';
import { ConfigContext, DefaultConfigProviderProps } from './context';
import useMergeProps from '../_util/hooks/useMergeProps';
const defaultProps = DefaultConfigProviderProps;
const componentConfig = {};
function ConfigProvider(baseProps: ConfigProviderProps) {
  const props = useMergeProps<ConfigProviderProps>(baseProps, defaultProps, componentConfig);
  const { prefixCls, children } = props;
  function getPrefixCls(componentName: string, customPrefix?: string) {
    return `${customPrefix || prefixCls}-${componentName}`;
  }
  const config: ConfigProviderProps = {
    ...omit(props, ['children']),
    getPrefixCls,
  };
  const child = children;
  // @todo child外层还可以包裹Icon的Provider
  return <ConfigContext.Provider value={config}>{child}</ConfigContext.Provider>;
}
ConfigProvider.ConfigContext = ConfigContext;
ConfigProvider.displayName = 'ConfigProvider';
export default ConfigProvider;
export const ConfigConsumer = ConfigContext.Consumer;
export { ConfigContext };
export type { ConfigProviderProps };
