import { createRoot } from 'react-dom/client';
import { ReactNode } from 'react';
import './global.less';
import 'virtual:uno.css';
import App from '@/app';

const appInit = (child: ReactNode) => {
  console.log('--开始初始化APP--');
  createRoot(document.getElementById('root')!).render(child);
  console.log('--APP初始化完毕--');
};
appInit(<App />);
