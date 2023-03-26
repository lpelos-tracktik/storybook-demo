import type { Meta, Story } from "@storybook/vue";

import TTAvatar from "../components/TTAvatar.vue";

//#region Meta

const meta: Meta = {
  title: "TTAvatar",
  component: TTAvatar,
  excludeStories: /.*Data$/,
};

export default meta;

//#endregion

//#region Props Data

export const propsData = {
  alt: "Le Image",
};

//#endregion

const Template: Story = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TTAvatar },
  template: '<TTAvatar v-bind="$props" />',
});

export const Default: Story = Template.bind({});

Default.args = propsData;

export const WithSrc: Story = Template.bind({});

WithSrc.args = {
  ...propsData,
  src: "https://picsum.photos/800/600",
};

export const WithBrokenSrc: Story = Template.bind({});

WithBrokenSrc.args = {
  ...propsData,
  src: "https://non-existing-url",
};
