import React from 'react';
import { ISvgFile } from './index';

interface IProps {
  file: ISvgFile;
  svgProps?: React.SVGProps<SVGSVGElement>;
}

export const Svg = (props: IProps) => {
  const {
    file: {
      default: { viewBox, id },
    },
    svgProps,
  } = props;

  return (
    <svg viewBox={viewBox} {...svgProps}>
      <use xlinkHref={`#${id}`} />
    </svg>
  );
};
