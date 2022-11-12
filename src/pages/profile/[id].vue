<script setup lang="ts">
import type { Ref } from "vue-demi";
import { useApi } from "~/composables/api";

const props = defineProps<{ id: string }>();
const router = useRouter();
const { t } = useI18n();
const user: Ref<{ id: number; name: string } | null> = ref(null);

const { getUserById } = useApi();

watchEffect(async () => {
  user.value = await getUserById(+props.id);
});
</script>

<template>
  <div class="min-h-[90vh]">
    <div text-4xl>
      <div i-carbon-pedestrian inline-block />
    </div>

    <p v-if="user">
      {{ t("intro.hi", { name: user.name }) }}
    </p>

    <div>
      <button btn m="3 t6" text-sm @click="router.back()">
        {{ t("button.back") }}
      </button>
    </div>
  </div>
</template>
