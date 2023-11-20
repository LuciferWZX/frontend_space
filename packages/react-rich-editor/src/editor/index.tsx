import { CSSProperties, FC, useCallback, useMemo } from 'react';
import { createEditor, Editor, Element, Transforms } from 'slate';
import { Editable, Slate, withReact } from 'slate-react';
import useRenderElement from '../hooks/useRenderElement';
import { CustomElement, EditorElementType, MentionItem } from '../types';
import ClassNames from 'classnames';
import '../editor.less';
import { withHistory } from 'slate-history';
import { withMentions } from '../hoc';
import useMentions from '../hooks/useMentions';
import Portal from '../components/portal';
import { MentionMenu } from '../components';
const initialValue: CustomElement[] = [
  {
    type: EditorElementType.DEFAULT,
    children: [{ text: 'A line of text in a paragraph.' }],
  },
];
interface IProps {
  className?: string;
  placeholder?: string;
  style?: CSSProperties;
}
const options: MentionItem[] = [];

for (let i = 1; i <= 30; i++) {
  const newItem: MentionItem = {
    value: i.toString(),
    label: `姓名${i}`,
  };
  options.push(newItem);
}
const ReactRichEditor: FC<IProps> = (props) => {
  const { className, placeholder, style } = props;
  const editor = useMemo(() => withMentions(withReact(withHistory(createEditor()))), []);
  const { renderElement, renderPlaceholder } = useRenderElement();
  const { chars, target, insertMentionNode, mentionRef, handleSelection } = useMentions(editor, {
    options: options,
  });
  const renderMentionMenu = useCallback(() => {
    return (
      target &&
      chars.length > 0 && (
        <Portal>
          <MentionMenu
            onMenuItemClick={(option) => {
              insertMentionNode(option);
            }}
            options={options}
            ref={mentionRef}
          />
        </Portal>
      )
    );
  }, [target, chars]);
  return (
    <Slate
      editor={editor}
      initialValue={initialValue}
      onChange={() => {
        handleSelection();
      }}
    >
      <Editable
        placeholder={placeholder}
        style={style}
        className={ClassNames({}, 'rich-editor', className)}
        renderElement={renderElement}
        renderPlaceholder={renderPlaceholder}
        onKeyDown={(event) => {
          if (event.key === '`' && event.ctrlKey) {
            // 默认阻止插入 "`" 行为。
            event.preventDefault();
            // 确定当前选中的任意块是否为代码块.
            const [match] = Editor.nodes(editor, {
              match: (n) => (n as CustomElement).type === EditorElementType.CODE,
            });
            // 根据是否已经存在匹配项来切换块类型
            Transforms.setNodes(
              editor,
              { type: match ? EditorElementType.PARAGRAPH : EditorElementType.CODE },
              {
                match: (n) => {
                  return Element.isElement(n) && Editor.isBlock(editor, n as CustomElement);
                },
              }
            );
          }
        }}
      />
      {renderMentionMenu()}
    </Slate>
  );
};
export default ReactRichEditor;
