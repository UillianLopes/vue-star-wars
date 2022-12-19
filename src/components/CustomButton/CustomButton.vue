<template>
  <button
    type="button"
    class="custom-button"
    :disabled="isDisabled"
    @click="click($event)"
  >
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.custom-button {
  padding: 12px;
  background: var(--primary-bg);
  color: var(--primary-color);
  border: none;
  border-radius: var(--default-radius);
  cursor: pointer;

  &:hover {
    background: var(--primary-hover);
  }

  &:disabled {
    background: gray;
    color: var(--primary-color);
    cursor: not-allowed;
  }
}
</style>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    isDisabled: Boolean,
  },
})
export default class CustomButton extends Vue {
  isDisabled!: boolean;
  click(event: MouseEvent) {
    this.$emit("onClick", event);
  }
}
</script>
