import type { Meta, Story } from "@storybook/vue";
import { rest } from "msw";

import ApiService, { ApiPaths } from "../services/api-service";
import SiteListView from "../views/SiteListView.vue";
import { sites } from "./__fixtures__/sites.fixture";
import { sleep } from "./helpers";

//#region Meta

const meta: Meta = {
  title: "Views / SiteListView",
  component: SiteListView,
  excludeStories: /.*Data$/,
};

export default meta;

//#endregion

const Template: Story = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SiteListView },
  template: `<SiteListView />`,
});

export const Default: Story = Template.bind({});

Default.decorators = [
  // Mock router
  (_, context) => {
    const component = context.component as CallableFunction;
    component.prototype.$route = { params: { id: "foo" } };
    component.prototype.$router = {
      push: (...args: any[]) => {
        console.log("called $router.push", { args });
      },
    };

    return { template: "<story />" };
  },
];

Default.parameters = {
  // Mock API
  msw: {
    handlers: [
      rest.get(
        new ApiService().getUrl(ApiPaths.SiteList),
        async (_req, res, ctx) => {
          await sleep(1000);
          return res(ctx.json(sites));
        }
      ),
    ],
  },
};
