import React, { ReactNode } from 'react';

export enum MarginType {
  SMALL = '12px',
  MEDIUM = '24px',
  LARGE = '56px',
  EXTRA_LARGE = '96px',
}

export type MarginProps = {
  /**
   * the children to be affected by the margin
   */
  children?: ReactNode;

  /**
   * the margin top
   */
  mt?: MarginType;

  /**
   * the margin bottom
   */
  mb?: MarginType;

} & React.HTMLAttributes<HTMLDivElement>;

export function Margin({
  mt, mb, children, style, ...rest
}: MarginProps) {
  return (
    <div style={{
      marginTop: mt,
      marginBottom: mb,
      width: '100%',
      ...style,
    }}
      {...rest}
    >
      {children}
    </div >
  );
}
