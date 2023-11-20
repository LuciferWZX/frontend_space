import { CSSProperties, FC } from 'react';
import { RenderElementProps, useFocused, useSelected } from 'slate-react';
import { MentionElement as MentionElementProps } from '../../types';
import styles from './index.module.less';
const MentionElement: FC<RenderElementProps> = (props) => {
  const { attributes, children } = props;
  const element = props.element as MentionElementProps;
  const selected = useSelected();
  const focused = useFocused();
  const style: CSSProperties = {
    boxShadow: selected && focused ? '0 0 0 2px #B4D5FF' : 'none',
  };
  return (
    <span
      {...attributes}
      className={styles.mentionElementBox}
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
