import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "./separator";

const meta: Meta<typeof Separator> = {
  title: "Components/Separator",
  component: Separator,
  
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = { args: { orientation: "horizontal" } };
export const Vertical: Story = { args: { orientation: "vertical", className: "h-20" } };
