<script setup lang="ts">
import type { Ref } from "vue-demi";
import SelectedTrackDetails from "~/components/SelectedTrackDetails.vue";
import SkillBlock from "~/components/SkillBlock.vue";
import { useApi } from "~/composables/api";
import type { ISkill, ITrack } from "~/types";

const props = defineProps<{ id: string }>();
const { t } = useI18n();
const user: Ref<{ id: number; name: string } | null> = ref(null);
const skills: Ref<ISkill[] | null> = ref(null);
const selectedTrack: Ref<ITrack | null> = ref(null);

const setSelectedTrack = (track: ITrack) => {
  selectedTrack.value = track;
};

const { getUserById, getSkillsTracks } = useApi();

watchEffect(async () => {
  user.value = await getUserById(+props.id);
  skills.value = await getSkillsTracks();
});
</script>

<template>
  <div class="min-h-[90vh] max-w-1200px mx-auto">
    <div text-4xl>
      <div i-carbon-pedestrian inline-block />
    </div>

    <p v-if="user" data-test-id="user-profile">
      {{ t("intro.hi", { name: user.name }) }}
    </p>
    <div v-if="skills" data-test-id="skills" class="w-full flex flex-wrap">
      <SkillBlock
        v-for="s in skills"
        :key="s.id"
        class="w-full md:w-1/2 lg:w-1/4"
        :skill="s"
        :data-test-id="`skill-${s.id}`"
        @select-track="setSelectedTrack"
      >
      </SkillBlock>
    </div>
    <SelectedTrackDetails
      v-if="selectedTrack?.id"
      class="mt-6"
      data-test-id="selected-track-details"
      :track="selectedTrack"
    />
  </div>
</template>
