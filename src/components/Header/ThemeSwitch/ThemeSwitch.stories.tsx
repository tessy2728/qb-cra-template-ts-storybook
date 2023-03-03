import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeSwitch } from ".";
import { Provider } from 'react-redux';
import store from '../../../store';
import { AppThemeProvider } from '../../../core/theme/provider';
import { withThemes } from '@react-theming/storybook-addon';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Basic UI/ThemeSwitch',
    component: ThemeSwitch,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            // <Provider store={store}>
            <Story />
            // </Provider>
        )
    ]
} as ComponentMeta<typeof ThemeSwitch>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ThemeSwitch> = (args) => <ThemeSwitch />;

export const DeletedTag = Template.bind({});