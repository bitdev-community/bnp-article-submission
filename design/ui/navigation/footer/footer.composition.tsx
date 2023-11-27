import React from 'react';
import { Footer } from './footer';

export const SampleFooter = () => (
  <Footer
    leftContent="Thanks for Visiting."
    rightContent={`© ${new Date().getFullYear()} Ober. All Rights Reserved.`}
  />
);
