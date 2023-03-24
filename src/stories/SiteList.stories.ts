import { action } from "@storybook/addon-actions";
import type { Meta, Story } from "@storybook/vue";

import SiteList from "../../src/components/SiteList.vue";
import { sites } from "./__fixtures__/sites.fixture";

//#region Meta

const meta: Meta = {
  title: "SiteList",
  component: SiteList,
  excludeStories: /.*Data$/,
};

export default meta;

//#endregion

//#region Props Data

export const actionsData = {
  "click:item": action("click:item"),
};

//#endregion

//#region Props Data

export const propsData = {
  sites,
};

//#endregion

const Template: Story = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SiteList },
  data: () => ({ actions: actionsData }),
  template: '<SiteList v-bind="$props" v-on="actions" />',
});

export const Default: Story = Template.bind({});

Default.args = propsData;
