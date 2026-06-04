import type { Meta, StoryObj } from "@storybook/react";
import { Toaster } from "./toaster";
import { toast } from "../../hooks/use-toast";
import { Button } from "../button";
import { ToastAction } from "./toast";

const meta: Meta<typeof Toaster> = {
  title: "Components/Toast",
  component: Toaster,
  
};

export default meta;
type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  render: () => (
    <>
      <Button
        onClick={() =>
          toast({
            title: "Scheduled: Catch up",
            description: "Friday, February 10, 2024 at 5:57 PM",
          })
        }
      >
        Show Toast
      </Button>
      <Toaster />
    </>
  ),
};

export const Destructive: Story = {
  render: () => (
    <>
      <Button
        variant="destructive"
        onClick={() =>
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
          })
        }
      >
        Show Destructive Toast
      </Button>
      <Toaster />
    </>
  ),
};

export const WithAction: Story = {
  render: () => (
    <>
      <Button
        onClick={() =>
          toast({
            title: "File deleted",
            description: "The file has been permanently deleted.",
            action: <ToastAction altText="Undo">Undo</ToastAction>,
          })
        }
      >
        Show Toast with Action
      </Button>
      <Toaster />
    </>
  ),
};
