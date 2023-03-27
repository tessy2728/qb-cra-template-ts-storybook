
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ButtonVariants from './variants';
import * as ButtonStories from './stories';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Basic UI/Button',
    component: ButtonVariants,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
} as ComponentMeta<typeof ButtonVariants>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonVariants> = (args) => <ButtonVariants {...args} />;

export const All = Template.bind({});
All.args = {
    buttons: [{
        title: ButtonStories.ContainedButton.args?.title,
        variant: ButtonStories.ContainedButton.args?.variant,
        disabled: ButtonStories.ContainedButton.args?.disabled
    }, {
        title: ButtonStories.ContainedDisabledButton.args?.title,
        variant: ButtonStories.ContainedDisabledButton.args?.variant,
        disabled: ButtonStories.ContainedDisabledButton.args?.disabled
    }, {
        title: ButtonStories.ContainedButtonWithTheme.args?.title,
        variant: ButtonStories.ContainedButtonWithTheme.args?.variant,
        themeColor: ButtonStories.ContainedButtonWithTheme.args?.themeColor
    }, {
        title: ButtonStories.OutlinedButton.args?.title,
        variant: ButtonStories.OutlinedButton.args?.variant,
        disabled: ButtonStories.OutlinedButton.args?.disabled
    }, {
        title: ButtonStories.OutlinedDisabledButton.args?.title,
        variant: ButtonStories.OutlinedDisabledButton.args?.variant,
        disabled: ButtonStories.OutlinedDisabledButton.args?.disabled
    }, {
        title: ButtonStories.OutlinedButtonWithTheme.args?.title,
        variant: ButtonStories.OutlinedButtonWithTheme.args?.variant,
        themeColor: ButtonStories.OutlinedButtonWithTheme.args?.themeColor
    }],
};