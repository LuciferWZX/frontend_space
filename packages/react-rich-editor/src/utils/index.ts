import { Editor, Transforms } from 'slate';
import { EditorElementType, MentionElement } from '../types';

const EditorUtils = {
  insertMention: (editor: Editor, character: string) => {
    const mention: MentionElement = {
      type: EditorElementType.MENTION,
      character,
      children: [{ text: '' }],
    };
    Transforms.insertNodes(editor, mention);
    Transforms.move(editor);
  },
};
export default EditorUtils;
