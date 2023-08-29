<template>
  <button type="button" @click="onClick" class="mx-2 btn-type loo-large-btn">
    <slot>Button</slot>
  </button>
</template>

<style scoped lang="scss">
  @import "../styles/components/loolargebutton.scss";
</style>

<script lang="ts" src="@/controllers/LooLargeButton.ts"></script>
