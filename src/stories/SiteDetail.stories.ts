import type { Meta, Story } from "@storybook/vue";
import { action } from "@storybook/addon-actions";

import SiteDetail from "../components/SiteDetail.vue";
import { sites } from "./__fixtures__/sites.fixture";

//#region Meta

const meta: Meta = {
  title: "SiteDetail",
  component: SiteDetail,
  excludeStories: /.*Data$/,
};

export default meta;

//#endregion

//#region Actions Data

export const actionsData = {
  "click:back": action("click:back"),
};

//#endregion

//#region Props Data

export const propsData = {
  site: sites[0],
};

//#endregion

const Template: Story = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SiteDetail },
  data: () => ({ actions: actionsData }),
  template: `<SiteDetail v-bind="$props" v-on="actions" />`,
});

export const Default: Story = Template.bind({});

Default.args = propsData;
