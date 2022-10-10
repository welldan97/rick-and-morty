import { memo } from 'react';
import BaseImage, { ImageProps } from 'next/image';

const Image = memo(({ className, style, ...props }: ImageProps) => (
  <div className={className} style={style}>
    <BaseImage {...props} />
  </div>
));

export default Image;
