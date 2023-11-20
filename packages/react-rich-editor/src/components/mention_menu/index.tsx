import { CSSProperties, FC, ForwardedRef, forwardRef } from 'react';
import styles from './index.module.less';
import ClassNames from 'classnames';
import { MentionItem } from '../../types';
import MentionMenuItem from '../mention_menu_item';
import { MacScrollbar } from 'mac-scrollbar';
interface IProps {
  className?: string;
  id?: string;
  options?: MentionItem[];
  style?: CSSProperties;
  currentIndex?: number;
  onMenuItemClick?: (option: MentionItem) => void;
}
const MentionMenu = forwardRef((props: IProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, id, options, currentIndex, onMenuItemClick, style } = props;
  return (
    <div
      id={id}
      ref={ref}
      style={style}
      className={ClassNames({ [styles.mentionBox]: true }, className)}
      data-cy="mentions-portal"
    >
      <MacScrollbar className={ClassNames({ [styles.scrollBox]: true }, className)}>
        {options?.map((option, index) => {
          return (
            <MentionMenuItem
              tabIndex={index}
              isActive={currentIndex === index}
              onClick={() => onMenuItemClick?.(option)}
              key={option.value}
            >
              {option.label}
            </MentionMenuItem>
          );
        })}
      </MacScrollbar>
    </div>
  );
});
export default MentionMenu;
