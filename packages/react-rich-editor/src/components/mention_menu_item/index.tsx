import { FC, MouseEventHandler, ReactNode } from 'react';
import styles from './index.module.less';
interface IProps {
  children?: ReactNode;
  onClick: MouseEventHandler<HTMLLIElement>;
}
const MentionMenuItem: FC<IProps> = (props) => {
  const { children, onClick } = props;
  return (
    <li onClick={onClick} className={styles.mentionMenuItemBox}>
      {children}
    </li>
  );
};
export default MentionMenuItem;
