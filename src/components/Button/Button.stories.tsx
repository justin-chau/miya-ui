import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import Button from "./Button";

export default {
  component: Button,
  title: "Button",
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Test",
};
