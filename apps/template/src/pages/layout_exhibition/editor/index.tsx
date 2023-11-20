import { FC, useEffect, useState } from 'react';
import { ReactRichEditor } from '@space/react-rich-editor';

const Editor: FC = () => {
  return (
    <div style={{ height: 400, marginTop: 200 }}>
      <ReactRichEditor placeholder={'请输入'} />
    </div>
  );
};
export default Editor;
