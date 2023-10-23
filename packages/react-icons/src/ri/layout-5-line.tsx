import { SVGProps } from 'react';
import ClassNames from 'classnames';

export default function RiLayout5Line(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
      className={ClassNames({ anticon: true }, props.className)}
    >
      <path
        fill="currentColor"
        d="M3 21a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3Zm4-11H4v9h3v-9Zm13 0H9v9h11v-9Zm0-5H4v3h16V5Z"
      ></path>
    </svg>
  );
}
