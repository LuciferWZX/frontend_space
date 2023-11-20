import { CSSProperties, FC, ForwardedRef, forwardRef } from 'react';
import styles from './index.module.less';
import ClassNames from 'classnames';
import { MentionItem } from '../../types';
import MentionMenuItem from '../mention_menu_item';
interface IProps {
  className?: string;
  options?: MentionItem[];
  style?: CSSProperties;
  onMenuItemClick?: (option: MentionItem) => void;
}
const MentionMenu = forwardRef((props: IProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, options, onMenuItemClick, style } = props;
  return (
    <div
      ref={ref}
      style={style}
      className={ClassNames({ [styles.mentionBox]: true }, className)}
      data-cy="mentions-portal"
    >
      <ul>
        {options?.map((option) => {
          return (
            <MentionMenuItem onClick={() => onMenuItemClick?.(option)} key={option.value}>
              {option.label}
            </MentionMenuItem>
          );
        })}
      </ul>
    </div>
  );
});
export default MentionMenu;
