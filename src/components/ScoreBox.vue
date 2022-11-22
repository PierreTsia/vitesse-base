<script lang="ts" setup>
withDefaults(
  defineProps<{
    color?: string;
  }>(),
  {
    color: "#fff",
  }
);
</script>

<template>
  <div
    class="border w-40px h-40px sm:w-50px sm:h-50px mx-auto my-auto"
    :style="{
      borderColor: color,
      color,
    }"
  >
    <slot />
  </div>
</template>
