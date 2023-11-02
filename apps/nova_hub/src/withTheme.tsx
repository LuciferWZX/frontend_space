import { FC, useEffect } from 'react';
import { Modal, ThemeProvider, message } from '@space/space-components';
import { useAntdStore } from '@space/stores';

const withTheme = (WrapComponent: FC) => {
  return () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [modal, modalContextHolder] = Modal.useModal();
    useEffect(() => {
      useAntdStore.setState({ message: messageApi, modal: modal });
    }, [messageApi]);
    return (
      <ThemeProvider>
        {contextHolder}
        {modalContextHolder}
        <WrapComponent />
      </ThemeProvider>
    );
  };
};
export default withTheme;
