import React from 'react';
import { Breadcrumb } from './breadcrumb';

export const SampleBreadcrumb = () => {
  return (
    <Breadcrumb
      typographyProps={{
        fontSize: 30
      }}
      crumbs={[
        { crumb: 'Home', link: '/' },
        { crumb: 'Components' },
        { crumb: 'Breadcrumb', link: '/component/breadcrumb' },
      ]}
    />
  );
}

