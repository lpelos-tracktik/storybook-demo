import type { Meta, Story } from "@storybook/vue";
import { userEvent, within } from "@storybook/testing-library";

import ImageGalery from "../components/ImageGalery.vue";
import PicsumService from "../services/picsum-service";
import { getCanvasElement, sleep } from "./helpers";

//#region Meta

const meta: Meta = {
  title: "ImageGalery",
  component: ImageGalery,
  excludeStories: /.*Data$/,
};

export default meta;

//#endregion

//#region Props Data

const picsumService = new PicsumService();

export const propsData = {
  images: [
    picsumService.getById(10),
    picsumService.getById(11),
    picsumService.getById(12),
  ],
};

//#endregion

const Template: Story = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ImageGalery },
  template: '<ImageGalery v-bind="$props" />',
});

export const Default: Story = Template.bind({});

Default.args = propsData;

export const ClickNext: Story = Template.bind({});

ClickNext.args = propsData;

ClickNext.play = async ({ args }) => {
  const canvasElement = await getCanvasElement();
  const canvas = within(canvasElement);

  const navBtn = canvas.getByTitle("next");

  /**
   * Advance to the end of the gallery and once again so it goes back to the
   * beginning
   */
  for (let i = 0; i <= args.images.length; i++) {
    await userEvent.click(navBtn);
    await sleep(500);
  }
};

export const ClickPrevious: Story = Template.bind({});

ClickPrevious.args = propsData;

ClickPrevious.play = async ({ args }) => {
  const canvasElement = await getCanvasElement();
  const canvas = within(canvasElement);

  const navBtn = canvas.getByTitle("previous");

  /**
   * Move back from the first to the last item and then back to the first one
   */
  for (let i = 0; i <= args.images.length; i++) {
    await userEvent.click(navBtn);
    await sleep(500);
  }
};
