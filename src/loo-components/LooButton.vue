<template>
  <button type="button" @click="onClick" class="btn btn-light mx-2 my-3 btn-type loo-transparent-button">
    <slot>Button</slot>
  </button>
</template>

<style scoped lang="scss">
  @import "../styles/components/loobutton.scss";
</style>

<script lang="ts" src="@/controllers/LooButton.ts"></script>