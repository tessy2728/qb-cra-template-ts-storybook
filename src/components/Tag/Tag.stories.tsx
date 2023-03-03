import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import * as colors from '../../core/config/colors';
import Tag from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Basic UI/Tag',
    component: Tag,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Tag>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const DeletedTag = Template.bind({});
DeletedTag.args = {
    bgColor: colors.LIGHT_RED,
    color: colors.DARK_RED,
    value: "Deleted"
};

export const PlannedTag = Template.bind({});
PlannedTag.args = {
    bgColor: colors.LIGHT_BLUE,
    color: colors.DARK_BLUE,
    value: "Planned"
};

export const OverdueTag = Template.bind({});
OverdueTag.args = {
    bgColor: colors.LIGHT_RED,
    color: colors.DARK_RED,
    value: "Overdue-Not Initiated"
};