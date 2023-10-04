<template>
  <div class="nuxt-button">
    <UButton :label="props.label">
      <slot>
        <span v-if="!!props.label == false"> Passed By Slot: Button </span>
        <span v-if="!!props.label"> Passed By Props: {{ props.label }} </span>
      </slot>
    </UButton>

    <hr />

    <button class="outro-botao">
      <slot>
        <span v-if="!!props.label == false"> Passed By Slot: Button </span>
        <span v-if="!!props.label"> Passed By Props: {{ props.label }} </span>
      </slot>
    </button>
  </div>
</template>

<script lang="ts" setup>
interface ButtonProps {
  label?: string | null;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  label: null,
});
</script>
