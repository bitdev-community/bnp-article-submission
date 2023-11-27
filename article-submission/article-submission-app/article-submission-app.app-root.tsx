import { createRoot } from 'react-dom/client';
import MUIPreviewContext from '@bits-and-pieces/dev.preview-contexts.mui-preview-context';
import { ArticleSubmissionApp } from './article-submission-app';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <MUIPreviewContext>
    <ArticleSubmissionApp />
  </MUIPreviewContext>
);
