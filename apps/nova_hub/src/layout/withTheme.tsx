import { FC, useEffect } from 'react';
import { ThemeProvider, message } from '@space/space-components';
import { useAntdStore } from '@space/stores';

const withTheme = (WrapComponent: FC) => {
  return () => {
    const [messageApi, contextHolder] = message.useMessage();
    useEffect(() => {
      useAntdStore.setState({ message: messageApi });
    }, [messageApi]);
    return (
      <ThemeProvider>
        {contextHolder}
        <WrapComponent />
      </ThemeProvider>
    );
  };
};
export default withTheme;
