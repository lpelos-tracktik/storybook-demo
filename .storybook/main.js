module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-coverage"
  ],
  framework: "@storybook/vue",
  core: {
    builder: "@storybook/builder-vite"
  },
  features: {
    interactionsDebugger: true, // 👈 Enable playback controls
    storyStoreV7: true,
  },
  staticDirs: ['../public']
}