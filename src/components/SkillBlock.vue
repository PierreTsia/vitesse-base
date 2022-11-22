<script lang="ts" setup>
import type { ISkill, ITrack } from "~/types";
import { capitalize } from "~/utils";

defineProps<{
  skill: ISkill;
}>();

defineEmits<{
  (event: "selectTrack", track: ITrack): void;
}>();

const colors = new Map([
  ["building", "#00AAC2"],
  ["executing", "#428AF6"],
  ["supporting", "#E1439F"],
  ["strengthening", "#E54552"],
]);
</script>

<template>
  <div class="p-2">
    <div class="text-xl p-4" :style="{ color: colors.get(skill.id) }">
      {{ capitalize(skill.id) }}
    </div>
    <ul class="w-full grid gap-y-2 grid-cols-6 md:grid-cols-4">
      <li
        v-for="t in skill.tracks"
        :key="t.id"
        class="track w-60px h-80px text-overflow-hidden truncate justify-self-start"
        :data-test-id="`track-${t.id}`"
      >
        <h4 class="text-0.6rem max-w-60px truncate overflow-hidden">
          {{ capitalize(t.id) }}
        </h4>
        <div
          class="border w-40px h-40px sm:w-50px sm:h-50px mx-auto"
          :style="{ borderColor: colors.get(skill.id) }"
          @click="$emit('selectTrack', t)"
        ></div>
      </li>
    </ul>
  </div>
</template>
