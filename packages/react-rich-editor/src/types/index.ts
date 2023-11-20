import { BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';
import { HistoryEditor } from 'slate-history';
import { ReactNode } from 'react';
export enum EditorElementType {
  PARAGRAPH = 'paragraph',
  DEFAULT = 'default',
  MENTION = 'mention',
  CODE = 'code',
}
export type CustomEditor = BaseEditor & ReactEditor & HistoryEditor;
export type MentionElement = {
  type: EditorElementType.MENTION;
  character: string;
  children: CustomText[];
};
export type ParagraphElement = {
  type: EditorElementType.PARAGRAPH;
  children: CustomText[];
};
export type DefaultElement = {
  type: EditorElementType.DEFAULT;
  children: CustomText[];
};
export type CodeElement = {
  type: EditorElementType.CODE;
  children: CustomText[];
};

export type CustomElement = ParagraphElement | CodeElement | DefaultElement | MentionElement;

export type FormattedText = { text: string; bold?: true };

export type CustomText = FormattedText;
export interface MentionItem {
  value: string | number;
  label: string | ReactNode;
  filterKeyword?: string;
}
