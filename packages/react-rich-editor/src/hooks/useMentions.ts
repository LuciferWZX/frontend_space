import { useEffect, useRef, useState } from 'react';
import { MentionItem } from '../types';
import { Editor, Range, Transforms } from 'slate';
import { ReactEditor } from 'slate-react';
import EditorUtils from '../utils';
interface UseMentionConfig {
  options: MentionItem[];
}
const useMentions = (editor: Editor, config: UseMentionConfig) => {
  const { options } = config;
  const mentionRef = useRef<HTMLDivElement | null>(null);
  const [target, setTarget] = useState<Range | undefined>();
  const [index, setIndex] = useState<number>(0);
  const [search, setSearch] = useState<string>('');

  const chars = options
    .filter((c) => {
      return (typeof c.label === 'string' ? (c.filterKeyword ? c.filterKeyword : c.label) : '')
        .toLowerCase()
        .startsWith(search.toLowerCase());
    })
    .slice(0, 10);
  useEffect(() => {
    if (target && chars.length > 0) {
      const el = mentionRef.current;
      if (el) {
        // const domRange = ReactEditor.toDOMRange(editor, target);
        const domRange = ReactEditor.toDOMRange(editor, target);
        const rect = domRange.getBoundingClientRect();
        // 获取视口的尺寸
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // 计算最大顶部位置，确保元素在视口内
        const maxTop = viewportHeight - el.clientHeight;
        const adjustedTop = Math.min(rect.top + window.scrollY + 24, maxTop);

        // 计算最大左侧位置，确保元素在视口内
        const maxLeft = viewportWidth - el.clientWidth;
        const adjustedLeft = Math.min(rect.left + window.scrollX, maxLeft);

        el.style.top = `${adjustedTop}px`;
        el.style.left = `${adjustedLeft}px`;
        // el.style.top = `${rect.top + window.scrollY + 24}px`;
        // el.style.left = `${rect.left + window.scrollX}px`;
      }
    }
  }, [chars.length, search, editor, target]);
  const handleSelection = () => {
    const { selection } = editor;
    if (selection && Range.isCollapsed(selection)) {
      const focusBeforePoint = Editor.before(editor, selection.focus, {
        unit: 'character',
      });
      const focusPoint = selection.focus;
      const _beforeRange =
        focusPoint && focusBeforePoint && Editor.range(editor, focusBeforePoint, focusPoint);
      const beforeChar = _beforeRange && Editor.string(editor, _beforeRange);
      if (beforeChar === '@') {
        setTarget(_beforeRange);
        setSearch('');
        setIndex(0);
        return;
      }

      const [start] = Range.edges(selection);
      const wordBefore = Editor.before(editor, start, { unit: 'word' });
      const before = wordBefore && Editor.before(editor, wordBefore);
      const beforeRange = before && Editor.range(editor, before, start);
      const beforeText = beforeRange && Editor.string(editor, beforeRange);
      // const beforeMatch = beforeText && beforeText.match(/^@(\w+)$/);
      const beforeMatch = beforeText && beforeText.match(/^@(.*)$/);
      // const after = Editor.after(editor, start);
      const after = selection.focus;
      const afterRange = Editor.range(editor, start, after);
      const afterText = Editor.string(editor, afterRange);
      const afterMatch = afterText.match(/^(\s|$)/);
      if (beforeMatch && afterMatch) {
        setTarget(beforeRange);
        setSearch(beforeMatch[1]);
        setIndex(0);
        return;
      }
      setTarget(undefined);
    }
  };
  console.log('search:', search);
  const insertMentionNode = (option: MentionItem) => {
    if (target) {
      Transforms.select(editor, target);
      EditorUtils.insertMention(
        editor,
        typeof option.label === 'string'
          ? option.label
          : option.filterKeyword
          ? option.filterKeyword
          : ''
      );
      setTarget(undefined);
      ReactEditor.focus(editor);
    }
  };
  return {
    handleSelection,
    mentionRef,
    chars,
    target,
    search,
    index,
    setIndex,
    setTarget,
    insertMentionNode,
  };
};
export default useMentions;
