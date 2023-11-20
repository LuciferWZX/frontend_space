import { FC, MouseEventHandler, ReactNode, useEffect, useRef } from 'react';
import styles from './index.module.less';
import ClassNames from 'classnames';
interface IProps {
  children?: ReactNode;
  tabIndex?: number;
  isActive?: boolean;
  onClick: MouseEventHandler<HTMLLIElement>;
}
const MentionMenuItem: FC<IProps> = (props) => {
  const ref = useRef<HTMLLIElement>(null);
  const { children, onClick, isActive, tabIndex } = props;
  useEffect(() => {
    if (isActive && ref.current) {
      setTimeout(() => {
        ref.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
      });
    }
  }, [isActive]);
  return (
    <li
      ref={ref}
      tabIndex={tabIndex}
      onClick={onClick}
      className={ClassNames({
        [styles.mentionMenuItemBox]: true,
        [styles.mentionMenuItemActive]: isActive,
      })}
    >
      {children}
    </li>
  );
};
export default MentionMenuItem;
