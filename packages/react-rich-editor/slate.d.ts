import { BaseRange } from 'slate';
import { CustomEditor, CustomElement, CustomText } from './src/types';
declare module 'slate' {
  interface CustomTypes {
    Editor: CustomEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
