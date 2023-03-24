import type { Meta, Story } from "@storybook/vue";

import AddressSummary from "../components/AddressSummary.vue";
import { addresses } from "./__fixtures__/addresses.fixture";

//#region Meta

const meta: Meta = {
  title: "AddressSummary",
  component: AddressSummary,
  excludeStories: /.*Data$/,
};

export default meta;

//#endregion

//#region Props Data

export const propsData = {
  address: addresses[0],
};

//#endregion

const Template: Story = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AddressSummary },
  template: '<AddressSummary v-bind="$props" />',
});

export const Default: Story = Template.bind({});

Default.args = propsData;
