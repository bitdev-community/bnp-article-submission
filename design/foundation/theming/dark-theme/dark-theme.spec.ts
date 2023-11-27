import { darkTheme } from './dark-theme';

it('should compile a dark theme object with correct primary color', () => {
  const compiledTheme = darkTheme();
  expect(compiledTheme.palette.primary.main).toEqual('#000');
});
