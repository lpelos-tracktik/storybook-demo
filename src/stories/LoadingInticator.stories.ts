import type { Meta, Story } from "@storybook/vue";

import LoadingIndicator from "../components/LoadingIndicator.vue";

//#region Meta

const meta: Meta = {
  title: "LoadingIndicator",
  component: LoadingIndicator,
  excludeStories: /.*Data$/,
};

export default meta;

//#endregion

//#region Props Data

export const propsData = {};

//#endregion

const Template: Story = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LoadingIndicator },
  template: '<LoadingIndicator v-bind="$props" />',
});

export const Default: Story = Template.bind({});

Default.args = propsData;

Default.parameters = {
  backgrounds: {
    default: "dark",
  },
};

export const WithDark: Story = Template.bind({});

WithDark.args = {
  ...propsData,
  dark: true,
};

WithDark.parameters = {
  backgrounds: {
    default: "light",
  },
};
