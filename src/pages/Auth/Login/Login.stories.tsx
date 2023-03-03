import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import store from '../../../store';
import Login from '.';
import { withRouter } from 'storybook-addon-react-router-v6';
import AppLayout from '../../../layouts/component';
import { AppThemeProvider } from '../../../core/theme/provider';
import { withThemes } from '@react-theming/storybook-addon';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Screens/Login',
    component: Login,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        withRouter,
        (Story) => (
            <Provider store={store}>
                <Story />
            </Provider>
        ),
    ],
    parameters: {
        reactRouter: {
            routePath: '/',
            outlet: <Login />
        }
    }

} as ComponentMeta<typeof Login>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Login> = (args) => <AppLayout />;

export const LoginPage = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
// BasicHeader.args = {
//   type: 'success',
//   message: 'Article created successfully'
// };