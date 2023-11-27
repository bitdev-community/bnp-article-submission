import {
  SizeableBox,
  SizeableBoxProps,
} from '@bits-and-pieces/design.patterns.sizeable-box';
import { Typography } from '@bits-and-pieces/design.foundation.typography.typography';
import { Box } from '@mui/material';
import React from 'react';

export type WorkItemProps = {
  /**
   * the designation of the work item.
   */
  designation: string;

  /**
   * the company of the work item.
   */
  company: string;

  /**
   * period of the work item.
   */
  period: string;
} & SizeableBoxProps;

export function WorkItem({
  company,
  designation,
  period,
  ...rest
}: WorkItemProps) {
  return (
    <SizeableBox {...rest}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Box>
          <Typography variant="body2">{designation}</Typography>
          <Typography variant="body2">{company}</Typography>
        </Box>
        <Typography variant="body1" fontWeight={700} color="text.secondary">
          {period}
        </Typography>
      </Box>
    </SizeableBox>
  );
}
