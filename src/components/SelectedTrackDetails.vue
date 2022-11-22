<script lang="ts" setup>
import type { Ref } from "vue-demi";
import { capitalize } from "~/utils";
import type { ITrack, ITrackLevel } from "~/types";

const props = defineProps<{
  track: ITrack;
}>();

const activeStep: Ref<ITrackLevel | null> = ref(null);
const setActiveStep = (i = 1) => {
  activeStep.value = props.track.steps.find((l) => l.score === i) ?? null;
};

watchEffect(() => {
  setActiveStep();
});
</script>

<template>
  <section class="mt-6" data-test-id="selected-track-details">
    <h2 class="text-4xl font-extra-bold text-left">
      {{ capitalize(track.id) }}
    </h2>
    <h6 class="font-thin text-left text-lg text-gray-400 border-b pb-8">
      {{ track.description }}
    </h6>
    <div class="w-full flex py-6">
      <ul class="w-2/10 flex flex-col gap-2" data-test-id="steps-ladder">
        <li
          v-for="i in [5, 4, 3, 2, 1]"
          :key="i"
          class="step cursor-pointer w-80px h-40px rounded bg-gray flex align-center justify-center"
          :class="{
            'outline outline-offset-2 outline-4 outline-red ':
              activeStep?.score === i,
          }"
          @click="setActiveStep(i)"
        >
          <h3 class="text-2xl font-extra-bold pt-1">{{ i }}</h3>
        </li>
      </ul>
      <div class="w-8/10" data-test-id="active-step-details">
        <h3 class="text-xl font-bold text-left">
          {{ activeStep?.description }}
        </h3>

        <section class="mt-4 w-full">
          <span class="text-gray-400 w-full mb-4">Examples: </span>
          <ul class="py-6">
            <li
              v-for="(e, i) in activeStep?.examples"
              :key="i"
              class="w-full text-left mb-2 font-thin italic"
            >
              🛠   {{ e }}
            </li>
          </ul>
        </section>
      </div>
    </div>
  </section>
</template>
