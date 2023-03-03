import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import * as colors from '../../core/config/colors';
import Button from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Basic UI/Button',
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ContainedButton = Template.bind({});
ContainedButton.args = {
    title: 'EXPORT',
    variant: 'contained'
};

export const ContainedDisabledButton = Template.bind({});
ContainedDisabledButton.args = {
    title: 'EXPORT',
    variant: 'contained',
    disabled: true
};

export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
    title: 'Sign In',
    variant: 'outlined'
};

export const OutlinedDisabledButton = Template.bind({});
OutlinedDisabledButton.args = {
    title: 'Sign In',
    variant: 'outlined',
    disabled: true
};