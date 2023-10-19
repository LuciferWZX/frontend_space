//**----------------------theme类型--------------------------
export type BaseMode = 'dark' | 'light' | 'compact';
export type ThemeMode = BaseMode;
//**----------------------布局类型----------------------------
/**
 * "h-c-f":上中下布局
 * "h-c[l-r]-f"：上中下布局    |   中：左右布局
 * "l-r[h-c-f]": 左右布局     |   右侧：分为左右布局
 */
export type LayoutMode = 'h-c-f' | 'h-c[l-r]-f' | 'l-r[h-c-f]';
