/**
 * @see https://storybook.js.org/docs/vue/configure/overview#configure-story-rendering
 */

import type { StoryObj } from '@storybook/vue'
import * as MswStorybookAddon from 'msw-storybook-addon';

/**
 * @see https://storybook.js.org/addons/msw-storybook-addon
 */
MswStorybookAddon.initialize({
  onUnhandledRequest: "bypass",
});

/**
 * @see https://storybook.js.org/docs/vue/writing-stories/decorators#global-decorators
 */
export const decorators: StoryObj['decorators'] = [
  MswStorybookAddon.mswDecorator,
];

/**
 * @see https://storybook.js.org/docs/vue/writing-stories/parameters#global-parameters
 */
export const parameters: StoryObj['parameters'] = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

/**
 * @see https://storybook.js.org/docs/vue/essentials/toolbars-and-globals#global-types-and-the-toolbar-annotation
 */
export const globalTypes = {}
