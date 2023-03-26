import type { Meta, Story } from "@storybook/vue";

import ImageGalery from "../components/ImageGalery.vue";
import PicsumService from "../services/picsum-service";

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
