import { Editor } from 'slate';
import { EditorElementType } from '../types';

const withMentions = (editor: Editor) => {
  const { isInline, isVoid, markableVoid } = editor;
  editor.isInline = (element) => {
    if (element.type === EditorElementType.MENTION) {
      return true;
    }
    return isInline(element);
  };
  editor.isVoid = (element) => {
    if (element.type === EditorElementType.MENTION) {
      return true;
    }
    return isVoid(element);
  };
  editor.markableVoid = (element) => {
    return element.type === EditorElementType.MENTION || markableVoid(element);
  };
  return editor;
};
export default withMentions;
