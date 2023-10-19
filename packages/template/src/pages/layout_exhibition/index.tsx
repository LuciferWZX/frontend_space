import { Button, Space, SpaceLayout, ThemeProvider } from '@space/space-components';

import styles from './index.module.less';
import { useState } from 'react';
const LayoutExhibition = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  return (
    <div className={styles.exhibition}>
      <Button
        style={{ marginBottom: 10 }}
        onClick={() => {
          setTheme((state) => {
            return state === 'light' ? 'dark' : 'light';
          });
        }}
      >
        切换主题
      </Button>
      <div>
        <ThemeProvider theme={theme}>
          <Space>
            <div className={styles.box}>
              <SpaceLayout.ClassicLayout
                style={{ height: '100%' }}
                header={' '}
                contentStyle={{ height: '100%', padding: 24 }}
                footer={' '}
              ></SpaceLayout.ClassicLayout>
            </div>
            <div className={styles.box}>
              <SpaceLayout.ElegantLayout
                style={{ height: '100%' }}
                header={' '}
                sider={' '}
                siderProps={{
                  width: 100,
                }}
                contentStyle={{ height: '100%', padding: 24 }}
                footer={' '}
              ></SpaceLayout.ElegantLayout>
            </div>
            <div className={styles.box}>
              <SpaceLayout.ModernLayout
                style={{ height: '100%' }}
                header={' '}
                sider={' '}
                siderProps={{
                  width: 100,
                }}
                contentStyle={{ height: '100%', padding: 24 }}
                footer={' '}
              ></SpaceLayout.ModernLayout>
            </div>
          </Space>
        </ThemeProvider>
      </div>
    </div>
  );
};
export default LayoutExhibition;
