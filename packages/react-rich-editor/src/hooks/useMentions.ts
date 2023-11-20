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

        el.style.top = `${rect.top + window.scrollY + 24}px`;
        el.style.left = `${rect.left + window.scrollX}px`;
      }
    }
  }, [chars.length, search, editor, target]);
  const handleSelection = () => {
    const { selection } = editor;

    if (selection && Range.isCollapsed(selection)) {
      const [start] = Range.edges(selection);
      const wordBefore = Editor.before(editor, start, { unit: 'word' });
      const before = wordBefore && Editor.before(editor, wordBefore);
      const beforeRange = before && Editor.range(editor, before, start);
      const beforeText = beforeRange && Editor.string(editor, beforeRange);
      // const beforeMatch = beforeText && beforeText.match(/^@(\w+)$/);
      const beforeMatch = beforeText && beforeText.match(/^@(.*)$/);
      if (beforeText && beforeText.endsWith('@')) {
        const _wordBefore = Editor.before(editor, start, { unit: 'character' });
        const _before = _wordBefore && Editor.before(editor, _wordBefore);
        const _beforeRange = _before && Editor.range(editor, _before, start);
        setTarget(_beforeRange);
        setSearch('');
        setIndex(0);
        return;
      }
      const after = Editor.after(editor, start);
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
  const insertMentionNode = (option: MentionItem) => {
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
    setSearch('');
    setIndex(0);
  };
  return {
    handleSelection,
    mentionRef,
    chars,
    target,
    search,
    index,
    insertMentionNode,
  };
};
export default useMentions;
