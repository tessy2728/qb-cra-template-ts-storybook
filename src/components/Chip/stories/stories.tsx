import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import * as colors from '../../../core/config/colors';
import Chip from '..';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Basic UI/Chip',
    component: Chip,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Chip>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const DeletedChip = Template.bind({});
DeletedChip.args = {
    bgColor: colors.LIGHT_RED,
    color: colors.DARK_RED,
    value: "Deleted"
};

export const PlannedChip = Template.bind({});
PlannedChip.args = {
    bgColor: colors.LIGHT_BLUE,
    color: colors.DARK_BLUE,
    value: "Planned"
};

export const CompletedChip = Template.bind({});
CompletedChip.args = {
    bgColor: colors.LIGHT_GREEN,
    color: colors.DARK_GREEN,
    value: "Completed"
};

export const OverdueChip = Template.bind({});
OverdueChip.args = {
    bgColor: colors.DARK_RED,
    color: colors.LIGHT_RED,
    value: "Overdue"
};