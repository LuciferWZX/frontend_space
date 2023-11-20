import { useCallback } from 'react';
import { CodeElement, DefaultElement, MentionElement, ParagraphElement } from '../nodes';
import { EditorElementType } from '../types';
import { RenderElementProps, RenderPlaceholderProps } from 'slate-react';
import '../editor.less';
import ClassNames from 'classnames';
const useRenderElement = () => {
  const renderElement = useCallback((props: RenderElementProps) => {
    const { children, ...restProps } = props;

    switch (restProps.element?.type) {
      case EditorElementType.PARAGRAPH:
        return <ParagraphElement {...restProps}>{children}</ParagraphElement>;
      case EditorElementType.CODE:
        return <CodeElement {...restProps}>{children}</CodeElement>;
      case EditorElementType.MENTION:
        return <MentionElement {...restProps}>{children}</MentionElement>;
      default:
        return <DefaultElement {...restProps}>{children}</DefaultElement>;
    }
  }, []);
  const renderPlaceholder = useCallback((props: RenderPlaceholderProps) => {
    return (
      <div {...props.attributes} className={ClassNames({}, 'rich-editor-placeholder')}>
        {props.children}
      </div>
    );
  }, []);
  return {
    renderElement,
    renderPlaceholder,
  };
};
export default useRenderElement;
