import { FC } from 'react';
import styles from './index.module.less';
import { ReactRichEditor } from '@space/react-rich-editor';
import { Button } from '@space/sofia-design';

const ChatPage: FC = () => {
  return (
    <div className={styles.chatBox}>
      <div className={styles.chatRecord}>
        <Button />
      </div>
      <div className={styles.chatInput}>
        <ReactRichEditor placeholder={'发送给邮箱助手'} />
      </div>
    </div>
  );
};
export default ChatPage;
