<script lang="ts" setup>
import type { Ref } from "vue-demi";
import { capitalize } from "~/utils";
import type { ITrack, ITrackLevel } from "~/types";

defineProps<{
  track: ITrack;
}>();

const activeStep: Ref<ITrackLevel | null> = ref(null);
</script>

<template>
  <section class="mt-6" data-test-id="selected-track-details">

    <h6 class="font-thin text-left text-lg text-gray-400 border-b pb-8">
      {{ track.description }}
    </h6>
    <div class="w-full flex py-6">
      <ul class="w-2/10 flex flex-col gap-2" data-test-id="steps-ladder">
        <li
          v-for="i in [5, 4, 3, 2, 1]"
          :key="i"
          class="step w-80px h-40px rounded bg-gray flex align-center justify-center"
        >
          <h3 class="text-2xl font-extra-bold pt-1">{{ i }}</h3>
        </li>
      </ul>
      <div class="w-8/10" data-test-id="active-step-details">
        {{ activeStep?.description }}
      </div>
    </div>
  </section>
</template>
