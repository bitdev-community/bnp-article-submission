import { NodeEnv } from '@teambit/node.node';
import { Compiler } from '@teambit/compiler';
import { EnvHandler } from '@teambit/envs';
import { Pipeline } from '@teambit/builder';
import {
  TypescriptCompiler,
  resolveTypes,
  TypescriptTask,
  TypescriptConfigWriter,
} from '@teambit/typescript.typescript-compiler';
import {
  ESLintLinter,
  EslintTask,
  EslintConfigWriter,
} from '@teambit/defender.eslint-linter';
import { JestTask, JestTester } from '@teambit/defender.jest-tester';
import {
  PrettierFormatter,
  PrettierConfigWriter,
} from '@teambit/defender.prettier-formatter';
import { Tester } from '@teambit/tester';
import { ConfigWriterList } from '@teambit/workspace-config-files';
import { AppTypeList } from '@teambit/application';
import { LambdaAppType } from '@bits-and-pieces/dev.app-types.lambda-app-type';

export class AwsLambdaEnv extends NodeEnv {
  name = 'aws-lambda-env';

  compiler(): EnvHandler<Compiler> {
    return TypescriptCompiler.from({
      tsconfig: this.tsconfigPath,
      types: resolveTypes(__dirname, [this.tsTypesPath]),
    });
  }

  tester(): EnvHandler<Tester> {
    return JestTester.from({
      config: this.jestConfigPath,
    });
  }

  linter() {
    return ESLintLinter.from({
      tsconfig: this.tsconfigPath,
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

  build() {
    return Pipeline.from([
      TypescriptTask.from({
        tsconfig: this.tsconfigPath,
        types: resolveTypes(__dirname, [this.tsTypesPath]),
      }),
      EslintTask.from({
        tsconfig: this.tsconfigPath,
        configPath: this.eslintConfigPath,
        pluginsPath: __dirname,
        extensions: this.eslintExtensions,
      }),
      JestTask.from({ config: this.jestConfigPath }),
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

  apps(): EnvHandler<AppTypeList> {
    return AppTypeList.from([LambdaAppType.from()]);
  }
}

export default new AwsLambdaEnv();
