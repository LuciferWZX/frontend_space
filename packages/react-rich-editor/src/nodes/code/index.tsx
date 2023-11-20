import { FC } from 'react';
import { RenderElementProps } from 'slate-react';

const CodeElement: FC<RenderElementProps> = (props) => {
  return (
    <pre {...props.attributes} style={{ background: 'red' }}>
      <code>{props.children}</code>
    </pre>
  );
};
export default CodeElement;
