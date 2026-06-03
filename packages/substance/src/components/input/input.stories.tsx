import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";
import { Label } from "../label";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = { args: { placeholder: "Enter text..." } };
export const Disabled: Story = { args: { disabled: true, placeholder: "Disabled" } };
export const WithLabel: Story = {
  render: () => (
    <div className="grid gap-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
  ),
};
export const File: Story = { args: { type: "file" } };
