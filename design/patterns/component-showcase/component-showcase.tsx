import React, { ReactNode, useMemo } from 'react';
import { ApolloProvider } from '@apollo/client';
// import { ComponentCard } from '@teambit/explorer.ui.component-card';
// import { RelationsGraph } from '@teambit/graph.relations-graph';
import { ellipsis } from '@teambit/design.ui.styles.ellipsis';
import { PreviewPlugin } from '@teambit/explorer.plugins.preview-plugin';
import { ComponentID } from '@teambit/component-id';
import { ComponentDescriptor, AspectList } from '@teambit/component-descriptor';
import { Code, CodeProps } from '@teambit/code.code';
import classNames from 'classnames';
import { Link } from '@teambit/base-react.navigation.link';
// import { GraphIcon } from './graph-icon';
import { CodeIcon } from './code-icon';
import { PreviewIcon } from './preview-icon';
import { useScope, client as scopeClient } from './code';
import styles from './component-showcase.module.scss';
import { useTheme } from '@mui/material';

export type ComponentShowcaseProps = {
  /**
   * The components' id to showcase.
   */
  componentId: string;
  preview?: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export function ComponentShowcase({
  componentId,
  preview,
  className,
  ...rest
}: ComponentShowcaseProps) {
  const [selectedTab, setSelectedTab] = React.useState<
    'preview' | 'graph' | 'code'
  >('preview');
  const theme = useTheme();
  const id = ComponentID.fromString(componentId || '');
  const component = new ComponentDescriptor(id as any, {} as AspectList);

  const activeTabFormats = useMemo(() => ({
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.primary.main,
  }), [theme])

  return (
    <div className={classNames(className)} {...rest}>
      <div className={styles.tab}>
        <Link external href={computeLink(id)} className={styles.componentId}
          style={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.background.paper,
            fontWeight: theme.typography.fontWeightBold
          }}>
          <span className={ellipsis}>{componentId}</span>
        </Link>
        <div className={styles.showcaseTabs}>
          <span
            className={classNames(
              styles.tabLinks,
              selectedTab === 'preview' && styles.active
            )}
            style={{
              ...selectedTab === 'preview' && activeTabFormats
            }}
            onClick={() => setSelectedTab('preview')}
          >
            <PreviewIcon /> <span>Preview</span>
          </span>
          <span
            className={classNames(
              styles.tabLinks,
              selectedTab === 'code' && styles.active
            )}
            style={{
              ...selectedTab === 'code' && activeTabFormats
            }}
            onClick={() => setSelectedTab('code')}
          >
            <CodeIcon /> <span>Code</span>
          </span>
        </div>
      </div>
      {/* @ts-ignore */}
      <div className={styles.tabContent} style={{
        border: `2px solid ${theme.palette.primary.main}`,
        borderRadius: '8px',
      }}>
        {/* @ts-ignore */}
        {selectedTab === 'preview' &&
          // @ts-ignore
          (preview || <PreviewPlugin component={component} />)}
        {selectedTab === 'code' && (
          // @ts-ignore
          <CodeTab component={component} className={styles.showcaseCodeTab} />
        )}
      </div>
    </div>
  );
}

// TODO: need for a component.
function computeLink(id: ComponentID) {
  const baseUrl = 'https://bit.cloud';
  const [owner, scope] = id.scope.split('.');

  return [baseUrl, owner, scope, id.fullName].join('/');
}

export function CodeTab({ component, ...rest }: CodeProps) {
  // TODO - find a better way to resolve scope hash?
  const scope = useScope(component?.scope);
  const client = scopeClient(scope);
  return (
    <ApolloProvider client={client}>
      <Code component={component} {...rest} />
    </ApolloProvider>
  );
}
