import { ReactEnv } from '@teambit/react.react-env';
import type { ReactEnvInterface } from '@teambit/react.react-env';
import { ReactPreview } from '@teambit/preview.react-preview';
import { EnvHandler } from '@teambit/envs';
import {
  TypescriptTask,
  TypescriptConfigWriter,
  resolveTypes,
  TypescriptCompiler,
} from '@teambit/typescript.typescript-compiler';
import {
  ESLintLinter,
  EslintConfigWriter,
  EslintTask,
} from '@teambit/defender.eslint-linter';
import { ESLint as ESLintLib } from 'eslint';
import { JestTask, JestTester } from '@teambit/defender.jest-tester';
import {
  PrettierConfigWriter,
  PrettierFormatter,
} from '@teambit/defender.prettier-formatter';
import typescript from 'typescript';
import { Pipeline } from '@teambit/builder';
import { Preview } from '@teambit/preview';
import { ConfigWriterList } from '@teambit/workspace-config-files';
import { Compiler } from '@teambit/compiler';
import { Tester } from '@teambit/tester';
require('jest')

export class MuiReactBnpEnv extends ReactEnv implements ReactEnvInterface {
  name = 'react-bnp-env';

  icon = 'https://static.bit.dev/extensions-icons/react.svg';

  protected tsconfigPath = require.resolve('./config/tsconfig.json');

  protected tsTypesPath = './types';

  protected jestConfigPath = require.resolve('./config/jest.config');

  protected eslintConfigPath = require.resolve('./config/eslintrc.js');

  protected eslintExtensions = ['.ts', '.tsx', '.js', '.jsx', '.mjs'];

  protected prettierConfigPath = require.resolve('./config/prettier.config.js');

  protected prettierExtensions = [
    '.js',
    '.jsx',
    '.ts',
    '.tsx',
    '.mjs',
    '.cjs',
    '.json',
    '.css',
    '.scss',
    '.md',
    '.mdx',
    '.html',
    '.yml',
    '.yaml',
  ];

  protected previewMounter = require.resolve('./preview/mounter');

  protected previewDocsTemplate = require.resolve('./preview/docs');

  compiler(): EnvHandler<Compiler> {
    return TypescriptCompiler.from({
      tsconfig: this.tsconfigPath,
      types: resolveTypes(__dirname, [this.tsTypesPath]),
      typescript,
    });
  }

  tester(): EnvHandler<Tester> {
    return JestTester.from({
      jest: require.resolve('jest'),
      config: this.jestConfigPath,
    });
  }

  linter() {
    return ESLintLinter.from({
      tsconfig: this.tsconfigPath,
      eslint: ESLintLib,
      configPath: this.eslintConfigPath,
      pluginsPath: __dirname,
      extensions: this.eslintExtensions,
    });
  }

  formatter() {
    return PrettierFormatter.from({
      configPath: this.prettierConfigPath,
    });
  }

  preview(): EnvHandler<Preview> {
    return ReactPreview.from({
      docsTemplate: this.previewDocsTemplate,
      mounter: this.previewMounter,
      hostDependencies: [
        '@teambit/mdx.ui.mdx-scope-context',
        '@mdx-js/react',
        'react',
        'react-dom',
        '@bits-and-pieces/design.foundation.theming.theme-provider',
        '@bits-and-pieces/design.foundation.theming.theme-toggle',
        '@mui/material',
        '@mui/icons-material',
        '@mui/lab',
      ],
    });
  }

  build() {
    return Pipeline.from([
      TypescriptTask.from({
        tsconfig: this.tsconfigPath,
        types: resolveTypes(__dirname, ['./types']),
        typescript,
      }),
      EslintTask.from({
        tsconfig: this.tsconfigPath,
        eslint: ESLintLib,
        configPath: this.eslintConfigPath,
        pluginsPath: __dirname,
        extensions: this.eslintExtensions,
      }),
      JestTask.from({
        config: this.jestConfigPath,
        jest: require.resolve('jest'),
      }),
    ]);
  }

  workspaceConfig(): ConfigWriterList {
    return ConfigWriterList.from([
      TypescriptConfigWriter.from({
        tsconfig: this.tsconfigPath,
        types: resolveTypes(__dirname, [this.tsTypesPath]),
      }),
      EslintConfigWriter.from({
        configPath: this.eslintConfigPath,
        tsconfig: this.tsconfigPath,
      }),
      PrettierConfigWriter.from({
        configPath: this.prettierConfigPath,
      }),
    ]);
  }
}

export default new MuiReactBnpEnv();
