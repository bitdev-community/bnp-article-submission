import React, { ReactNode } from 'react';
import { Link as ReactRouterLink, LinkProps as ReactRouterLinkProps } from 'react-router-dom';

export type LinkProps = {
  /**
   * the children to be rendered on react-router-dom's Link
   */
  children?: ReactNode;
} & ReactRouterLinkProps;

export function Link({ children, style, ...rest }: LinkProps) {
  return (
    <ReactRouterLink
      {...rest}
      style={{ textDecoration: 'none', ...style }}
    >
      {children}
    </ReactRouterLink>
  );
}
