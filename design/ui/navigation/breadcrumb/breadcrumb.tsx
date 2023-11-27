import React, { useMemo, Fragment } from 'react';
import { Heading } from '@bits-and-pieces/design.foundation.typography.heading';
import { TypographyProps, Box, Link } from '@mui/material';
import { BreadcrumbType } from './breadcrumb.type';

export type BreadcrumbProps = {
  /**
   * The crumbs to be rendered in the breadcrumb
   */
  crumbs: BreadcrumbType[];
  typographyProps?: TypographyProps;
};

const getCrumb = ({ crumb, props }) => (
  <Heading
    color="primary"
    fontWeight={700}
    value={crumb}
    {...(props && { ...props })}
  />
);

export function Breadcrumb({ crumbs, typographyProps }: BreadcrumbProps) {
  const totalCrumbs = useMemo(() => crumbs.length, [crumbs]);
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 0.5,
        alignItems: 'center',
      }}
    >
      {crumbs.map((crumb, index) => (
        <Fragment key={crumb.crumb}>
          {index !== totalCrumbs && (
            <Heading
              color="textSecondary"
              fontWeight={700}
              value="/ "
              {...(typographyProps && { ...typographyProps })}
            />
          )}
          {crumb.link ? (
            <Link
              href={crumb.link}
              underline="none"
              style={{
                color: 'inherit',
              }}
            >
              {getCrumb({ crumb: crumb.crumb, props: typographyProps })}
            </Link>
          ) : (
            getCrumb({ crumb: crumb.crumb, props: typographyProps })
          )}
        </Fragment>
      ))}
    </Box>
  );
}
