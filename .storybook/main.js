/** @type { import('@storybook/vue3-vite').StorybookConfig } */
// const config = {
//   
// };
// export default config;

import path from 'path'
import { loadConfigFromFile, mergeConfig } from 'vite'

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
export default {
  
  // Other configuration options
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },

  // Using custom config vite for storybook
  async viteFinal(baseConfig) {
    const { config: userConfig } = await loadConfigFromFile(
      path.resolve(__dirname, "../vite-storybook.config.ts")
    )

    return mergeConfig(baseConfig, userConfig)
  }
}
