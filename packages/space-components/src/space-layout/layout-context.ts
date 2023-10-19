import React from 'react';
interface LayoutContextType {
  expand?: boolean;
  setExpand?: (expand?: boolean) => void;
}
export const LayoutContext = React.createContext<LayoutContextType>({});
