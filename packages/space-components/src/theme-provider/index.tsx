import { FC, ReactNode } from 'react';
import { App, ConfigProvider, theme as antdTheme } from 'antd';
import { ThemeMode } from '@space/types';
import baseComponentConfig from './baseComponentConfig.ts';
import { useSystemTheme } from '@space/react-hooks';
import zhCN from 'antd/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import dayjs from 'dayjs';
dayjs.locale('zh-cn');
interface IProps {
  children?: ReactNode;
  theme?: ThemeMode | ThemeMode[];
}
const ThemeProvider: FC<IProps> = (props) => {
  const { children, theme: pTheme } = props;
  const { systemTheme } = useSystemTheme();
  const theme = pTheme ?? systemTheme;
  const matchTheme = (_theme: ThemeMode) => {
    if (_theme === 'compact') {
      return antdTheme.compactAlgorithm;
    }
    if (_theme === 'dark') {
      return antdTheme.darkAlgorithm;
    }
    return antdTheme.defaultAlgorithm;
  };
  const getTheme = () => {
    if (!theme) {
      return antdTheme.defaultAlgorithm;
    }
    if (typeof theme === 'string') {
      return matchTheme(theme);
    }

    //传入的theme是数组
    return theme.map((th) => {
      return matchTheme(th);
    });
  };

  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        algorithm: getTheme(),
        token: {
          // colorPrimary: 'orange',
        },
        components: {
          Layout: {
            ...baseComponentConfig.Layout,
          },
          Table: {
            ...baseComponentConfig.Table,
          },
        },
      }}
    >
      <App>{children}</App>
    </ConfigProvider>
  );
};
export default ThemeProvider;
