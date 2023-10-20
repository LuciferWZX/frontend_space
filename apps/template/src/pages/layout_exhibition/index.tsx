import { Button, Space, SpaceLayout, ThemeProvider } from '@space/space-components';
import { generateId } from '@space/utils';
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
      <Button
        style={{ marginBottom: 10 }}
        onClick={() => {
          alert(generateId(9));
        }}
      >
        生成Id
      </Button>
      <div>
        <ThemeProvider theme={theme}>
          <Space wrap={true}>
            <div className={styles.box}>
              <SpaceLayout.ModernLayout
                style={{ height: '100%' }}
                header={' '}
                menuProps={{
                  // selectedKeys: ['1'],
                  onSelect: ({ key }) => {
                    console.log(key);
                  },
                  items: [
                    { label: '菜单1菜单1', key: '1' },
                    { label: '菜单2', key: '2' },
                    { label: '菜单3', key: '3' },
                    { label: '菜单4', key: '4' },
                  ],
                }}
                contentStyle={{ height: '100%', padding: 24 }}
                footer={' '}
              ></SpaceLayout.ModernLayout>
            </div>
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
                menuProps={{
                  // selectedKeys: ['1'],
                  onSelect: ({ key }) => {
                    console.log(key);
                  },
                  items: [
                    { label: '菜单1菜单1', key: '1' },
                    { label: '菜单2', key: '2' },
                    { label: '菜单3', key: '3' },
                    { label: '菜单4', key: '4' },
                  ],
                }}
                contentStyle={{ height: '100%', padding: 24 }}
                footer={' '}
              ></SpaceLayout.ElegantLayout>
            </div>
          </Space>
        </ThemeProvider>
      </div>
    </div>
  );
};
export default LayoutExhibition;
