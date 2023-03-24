import type { Meta, Story } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { userEvent, within } from "@storybook/testing-library";

import SiteList from "../../src/components/SiteList.vue";
import { sites } from "./__fixtures__/sites.fixture";
import { sleep } from "./helpers";

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

export const ClickItems: Story = Template.bind({});

ClickItems.args = propsData;

/**
 * @see https://storybook.js.org/docs/vue/writing-stories/play-function
 */
ClickItems.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  for (const site of sites) {
    await userEvent.click(canvas.getByText(site.title));
    await sleep(500);
  }
};
