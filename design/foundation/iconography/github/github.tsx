import React from 'react';
import { GithubSvg, GithubSvgProps } from './github.svg';

export type GithubProps = {
} & GithubSvgProps;

export function Github(props: GithubProps) {
  return (
    <GithubSvg {...props} />
  );
}
