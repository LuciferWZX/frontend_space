import { SVGProps } from 'react';
import ClassNames from 'classnames';

export default function CarbonGuiManagement(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
      className={ClassNames({ anticon: true }, props.className)}
    >
      <path
        fill="currentColor"
        d="M30 24v-2h-2.101a4.968 4.968 0 0 0-.732-1.753l1.49-1.49l-1.414-1.414l-1.49 1.49A4.968 4.968 0 0 0 24 18.101V16h-2v2.101a4.968 4.968 0 0 0-1.753.732l-1.49-1.49l-1.414 1.414l1.49 1.49A4.968 4.968 0 0 0 18.101 22H16v2h2.101a4.968 4.968 0 0 0 .732 1.753l-1.49 1.49l1.414 1.414l1.49-1.49a4.968 4.968 0 0 0 1.753.732V30h2v-2.101a4.968 4.968 0 0 0 1.753-.732l1.49 1.49l1.414-1.414l-1.49-1.49A4.968 4.968 0 0 0 27.899 24Zm-7 2a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3Z"
      ></path>
      <path
        fill="currentColor"
        d="M28 4H4a2.002 2.002 0 0 0-2 2v20a2.002 2.002 0 0 0 2 2h10v-2H4V12h24v3h2V6a2.002 2.002 0 0 0-2-2Zm0 6H4V6h24Z"
      ></path>
      <circle cx="20" cy="8" r="1" fill="currentColor"></circle>
      <circle cx="23" cy="8" r="1" fill="currentColor"></circle>
      <circle cx="26" cy="8" r="1" fill="currentColor"></circle>
    </svg>
  );
}
