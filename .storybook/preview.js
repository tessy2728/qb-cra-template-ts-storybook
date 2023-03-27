import React from 'react';
import Style from '../src/core/styles/global';
import { AppThemeProvider } from '../src/core/theme/provider';
import { Provider } from 'react-redux';
import store from '../src/store';
import { configure } from '@storybook/react'

function loadStories() {
  document.body.className += ' ' + 'text-left'
}

configure(loadStories, module)
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  }
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