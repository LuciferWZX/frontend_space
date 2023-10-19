import { SpaceLayout, ThemeProvider } from '@space/space-components';
import styles from './index.module.less';
/**
 * compact: true
 */
const ModernLayout = () => {
  return (
    <ThemeProvider>
      <SpaceLayout.ModernLayout
        style={{ height: '100vh' }}
        header={'this is header'}
        sider={'this is sider'}
        contentStyle={{ height: '100%', padding: 24 }}
        footer={'this is footer'}
      >
        this is content
      </SpaceLayout.ModernLayout>
    </ThemeProvider>
  );
};
export default ModernLayout;
