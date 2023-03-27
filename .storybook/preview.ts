/**
 * @see https://storybook.js.org/docs/6.0/vue/configure/overview#configure-story-rendering
 */

import type { StoryObj } from '@storybook/vue'

/**
 * @see https://storybook.js.org/docs/6.0/vue/writing-stories/decorators#global-decorators
 */
export const decorators: StoryObj['decorators'] = [];

/**
 * @see https://storybook.js.org/docs/6.0/vue/writing-stories/parameters#global-parameters
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
 * @see https://storybook.js.org/docs/6.0/vue/essentials/toolbars-and-globals#global-types-and-the-toolbar-annotation
 */
export const globalTypes = {}
