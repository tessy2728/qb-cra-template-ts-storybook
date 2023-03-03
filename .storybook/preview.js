import React from 'react';
import Style from '../src/core/styles/global';
import { AppThemeProvider } from '../src/core/theme/provider';
import { Provider } from 'react-redux';
import store from '../src/store';
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
export const withTheme = (StoryFn) => {
  // Get values from story parameter first
  return <Provider store={store}>
    <AppThemeProvider>
      <><Style.GlobalStyle />
        <StoryFn /></>
    </AppThemeProvider>
  </Provider>
}

export const decorators = [withTheme]