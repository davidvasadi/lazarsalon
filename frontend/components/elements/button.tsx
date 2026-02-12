import { LinkProps } from 'next/link';
import React from 'react';

import { cn } from '@/lib/utils';

interface ButtonProps {
  variant?: 'simple' | 'outline' | 'primary' | 'muted';
  as?: React.ElementType;
  asChild?: boolean; // ✅ ADD
  className?: string;
  children?: React.ReactNode;
  href?: LinkProps['href'];
  onClick?: () => void;
  [key: string]: any;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  as: Tag = 'button',
  asChild = false, // ✅ ADD
  className,
  children,
  ...props
}) => {
  const variantClass =
    variant === 'simple'
      ? 'bg-secondary relative z-10 bg-transparent hover:border-secondary/50 hover:bg-secondary/10  border border-transparent text-white text-sm md:text-sm transition font-medium duration-200  rounded-md px-4 py-2  flex items-center justify-center'
      : variant === 'outline'
        ? 'bg-white relative z-10 hover:bg-secondary/90 hover:shadow-xl  text-black border border-black hover:text-black text-sm md:text-sm transition font-medium duration-200  rounded-md px-4 py-2  flex items-center justify-center'
        : variant === 'primary'
          ? 'bg-lightblack relative z-10 hover:bg-secondary/90  border border-secondary text-[#E7E5E4] text-sm md:text-sm transition font-medium duration-200  rounded-md px-4 py-2  flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF60_inset,_0px_1px_0px_0px_#FFFFFF60_inset  hover:-translate-y-1 active:-translate-y-0'
          : variant === 'muted'
            ? 'bg-neutral-800 relative z-10 hover:bg-neutral-900  border border-transparent text-white text-sm md:text-sm transition font-medium duration-200  rounded-md px-4 py-2  flex items-center justify-center shadow-[0px_1px_0px_0px_#FFFFFF20_inset]'
            : '';

  const mergedClassName = cn(
    'bg-secondary relative z-10 bg-transparent hover:border-secondary hover:bg-secondary/50  border border-transparent text-white text-sm md:text-sm transition font-medium duration-200  rounded-md px-4 py-2  flex items-center justify-center ',
    variantClass,
    className
  );

  // ✅ asChild: a gyerek (pl. <Link/>) kapja meg a className-t, és NEM kerül asChild a DOM-ra
  if (asChild) {
    const only = React.Children.only(children);
    if (!React.isValidElement(only)) return null;

    return React.cloneElement(only as any, {
      ...props,
      className: cn((only as any).props?.className, mergedClassName),
      children: (only as any).props?.children ?? children ?? `Get Started`,
    });
  }

  const Element = Tag as any;

  return (
    <Element className={mergedClassName} {...props}>
      {children ?? `Get Started`}
    </Element>
  );
};
