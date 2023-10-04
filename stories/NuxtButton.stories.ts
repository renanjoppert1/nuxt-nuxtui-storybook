import NuxtButton from '../components/NuxtButton.vue' // Imported with '~' shorthand syntax


export default {
  title: 'Components/Nuxt Button',
  component: NuxtButton,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
  },
};

export const Primary = {
  args: {
    label: 'Button',
  },
};
