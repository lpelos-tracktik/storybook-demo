import type { Meta, Story } from "@storybook/vue";

import SiteSummary from "../../src/components/SiteSummary.vue";
import { propsData as siteListPropsData } from "./SiteList.stories";

//#region Meta

const meta: Meta = {
  title: "SiteSummary",
  component: SiteSummary,
  excludeStories: /.*Data$/,
};

export default meta;

//#endregion

//#region Props Data

export const propsData = {
  site: siteListPropsData.sites[0],
};

//#endregion

const Template: Story = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SiteSummary },
  template: '<SiteSummary v-bind="$props" />',
});

export const Default: Story = Template.bind({});

Default.args = propsData;
