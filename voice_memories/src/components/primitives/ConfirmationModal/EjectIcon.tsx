import { useId } from 'react';

import { IconProps } from '@/components/types/IconProps'
import clsx from 'clsx';

export const EjectIcon = ({ className, ...rest }: IconProps) => {
  const id = useId();

  return (
    <svg
      id={id}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className, 'h-4 w-4 fill-white')}
      viewBox="0 0 448 512"
    >
      <path d="M224 32c13.5 0 26.3 5.6 35.4 15.6l176 192c12.9 14 16.2 34.3 8.6 51.8S419 320 400 320H48c-19 0-36.3-11.2-43.9-28.7s-4.3-37.7 8.6-51.8l176-192C197.7 37.6 210.5 32 224 32zM0 432c0-26.5 21.5-48 48-48H400c26.5 0 48 21.5 48 48s-21.5 48-48 48H48c-26.5 0-48-21.5-48-48z" />
    </svg>
  );
};
