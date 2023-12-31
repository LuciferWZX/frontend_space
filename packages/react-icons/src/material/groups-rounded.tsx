import { SVGProps } from 'react';
import ClassNames from 'classnames';

export default function MaterialSymbolsGroupsRounded(props: SVGProps<SVGSVGElement>) {
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
        d="M1 18q-.425 0-.713-.288T0 17v-.575q0-1.1 1.1-1.763T4 14q.325 0 .613.025t.562.075q-.35.5-.513 1.075T4.5 16.4V18H1Zm6 0q-.425 0-.713-.288T6 17v-.6q0-1.625 1.663-2.638T12 12.75q2.7 0 4.35 1.012T18 16.4v.6q0 .425-.288.713T17 18H7Zm12.5 0v-1.6q0-.65-.175-1.225t-.5-1.075q.275-.05.563-.075T20 14q1.8 0 2.9.663t1.1 1.762V17q0 .425-.288.713T23 18h-3.5ZM4 13q-.825 0-1.413-.588T2 11q0-.825.588-1.413T4 9q.825 0 1.413.588T6 11q0 .825-.588 1.413T4 13Zm16 0q-.825 0-1.413-.588T18 11q0-.825.588-1.413T20 9q.825 0 1.413.588T22 11q0 .825-.588 1.413T20 13Zm-8-1q-1.25 0-2.125-.875T9 9q0-1.25.875-2.125T12 6q1.25 0 2.125.875T15 9q0 1.25-.875 2.125T12 12Z"
      ></path>
    </svg>
  );
}
