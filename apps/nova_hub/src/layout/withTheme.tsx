import { FC } from 'react';
import { ThemeProvider } from '@space/space-components';

const withTheme = (WrapComponent: FC) => {
  return () => {
    return (
      <ThemeProvider>
        <WrapComponent />
      </ThemeProvider>
    );
  };
};
export default withTheme;
