import { CSSProperties, FC, useCallback, useMemo } from 'react';
import { BasePoint, createEditor, Editor, Element, Transforms } from 'slate';
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
import EditorUtils from '../utils';
import 'mac-scrollbar/dist/mac-scrollbar.css';
import { Dropdown } from '@space/space-components';
const initialValue: CustomElement[] = [
  {
    type: EditorElementType.DEFAULT,
    children: [{ text: '123456789' }],
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
  const {
    chars,
    target: mentionRangeTarget,
    insertMentionNode,
    mentionRef,
    index: itemIndex,
    handleSelection,
    setIndex,
    setTarget,
  } = useMentions(editor, {
    options: options,
  });
  const renderMentionMenu = useCallback(() => {
    return (
      mentionRangeTarget &&
      chars.length > 0 && (
        <MentionMenu
          id={'xx'}
          currentIndex={itemIndex}
          onMenuItemClick={(option) => {
            insertMentionNode(option);
          }}
          options={chars}
          ref={mentionRef}
        />
      )
    );
  }, [mentionRangeTarget, chars]);
  return (
    <>
      {/*<div style={{ position: 'relative' }}>{renderMentionMenu()}</div>*/}
      <Dropdown
        transitionName={''}
        open={mentionRangeTarget && chars.length > 0}
        menu={{
          activeKey: chars.find((_, index) => index === itemIndex)?.value.toString(),
          items: chars.map((op) => {
            return {
              key: op.value.toString(),
              label: op.label,
              onClick: () => {
                insertMentionNode(op);
              },
            };
          }),
        }}
      >
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
              if (mentionRangeTarget && chars.length > 0) {
                switch (event.key) {
                  case 'ArrowDown':
                    event.preventDefault();
                    const prevIndex = itemIndex >= chars.length - 1 ? 0 : itemIndex + 1;
                    setIndex(prevIndex);
                    break;
                  case 'ArrowUp':
                    event.preventDefault();
                    const nextIndex = itemIndex <= 0 ? chars.length - 1 : itemIndex - 1;
                    setIndex(nextIndex);
                    break;
                  case 'Tab':
                  case 'Enter':
                    event.preventDefault();
                    Transforms.select(editor, mentionRangeTarget);
                    const option = chars[itemIndex];
                    EditorUtils.insertMention(
                      editor,
                      typeof option.label === 'string'
                        ? option.label
                        : option.filterKeyword
                        ? option.filterKeyword
                        : ''
                    );
                    setTarget(undefined);
                    break;
                  case 'Escape':
                    event.preventDefault();
                    setTarget(undefined);
                    break;
                }
              }
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
                  { type: match ? EditorElementType.DEFAULT : EditorElementType.CODE },
                  {
                    match: (n) => {
                      return Element.isElement(n) && Editor.isBlock(editor, n as CustomElement);
                    },
                  }
                );
              }
              if (event.key === 'c' && event.ctrlKey) {
                Transforms.move(editor);
              }
            }}
          />
        </Slate>
      </Dropdown>
    </>
  );
};
export default ReactRichEditor;
