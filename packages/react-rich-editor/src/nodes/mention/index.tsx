import { CSSProperties, FC } from 'react';
import { RenderElementProps, useFocused, useSelected } from 'slate-react';
import { MentionElement as MentionElementProps } from '../../types';

const MentionElement: FC<RenderElementProps> = (props) => {
  const { attributes, children } = props;
  const element = props.element as MentionElementProps;
  const selected = useSelected();
  const focused = useFocused();
  const style: CSSProperties = {
    padding: '3px 3px 2px',
    margin: '0 1px',
    verticalAlign: 'baseline',
    display: 'inline-block',
    borderRadius: '4px',
    backgroundColor: '#eee',
    fontSize: '0.9em',
    boxShadow: selected && focused ? '0 0 0 2px #B4D5FF' : 'none',
  };
  return (
    <span
      {...attributes}
      contentEditable={false}
      data-cy={`mention-${element.character.replace(' ', '-')}`}
      style={style}
    >
      @{element.character}
      {children}
    </span>
  );
};
export default MentionElement;
