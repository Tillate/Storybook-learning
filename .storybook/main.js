module.exports = {
  stories: [
    '../src/components/**/*.stories.js',
    '../src/stories/**/*.stories.jsx',
    '../src/stories/**/*.stories.js',
    '../src/stories/*.stories.mdx',

],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}