import type { Meta, Story } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { userEvent, within } from "@storybook/testing-library";

import SiteDetail from "../components/SiteDetail.vue";
import { sites } from "./__fixtures__/sites.fixture";
import { getCanvasElement } from "./helpers";

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

export const ClickBack: Story = Template.bind({});

ClickBack.args = propsData;

ClickBack.play = async () => {
  const canvasElement = await getCanvasElement();
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByTitle("go back"));
};
