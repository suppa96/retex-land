<script setup lang="ts">
import type { QuestionStepProps } from "~/components/molecules/MoleculesQuestionStep.props";
import type { User } from "~/stores/users";
import { useUsersStore } from "~/stores/users";

type Answer = { id: number; value: string; step: string };

definePageMeta({
  layout: "onboarding",
});

// const hash = 'f2858703622f57ac4a81905d4afd72cf'
const hash = "1fb3b75e28dc98f0424e289fd16c0fde";
const store = useUsersStore();
const { updateUserInfo } = store;
const { users } = storeToRefs(store);

const user = computed<User | undefined>(() => {
  const user = users.value.find((user) => user.hash === hash);
  return user;
});

const updateInfo = () => {
  const data = ["Rompere le balle a Ska", "Snowboard", "Andare al mare"];
  updateUserInfo("passions", user.value?.email!, data);
};
const questions: QuestionStepProps[] = [
{
    id: 1,
    type: "multi-select",
    question:
      "Quali sono i tre valori per te più importanti in ambito lavorativo?",
    stepName: "personal",
    chip: { name: "personal", label: "Info personali", color: "bg-[#B6D6DA]" },
    options: [
      "Diversity & Inclusion",
      "Flessibilità",
      "Innovazione",
      "Trasparenza",
      "Collaborazione",
      "Ambizione",
    ],
  },
  {
    id: 2,
    type: "single-choice",
    question: "Com'è la tua giornata ideale?",
    stepName: "passions",
    chip: { name: "passion", label: "Hobby e passioni", color: "bg-[#E6BEF8]" },
    options: [
      "Relax, divano e Netflix",
      "Sempre in movimento",
      "Piena di sport",
    ],
  },
  {
    id: 3,
    type: "multi-select",
    question: "In quali skill ti riconosci di più?",
    stepName: "skills",
    chip: { name: "skills", label: "Esperienze lavorative", color: "bg-[#BDDAB6]" },
    options: [
      "Marketing",
      "Copywriting",
      "Adv",
      "Social",
      "Creative strategy",
      "Graphic Design",
      "Branding"
    ],
    optionalCta: {
      to: "/linkedin",
      label: "Aggiungi con LinkedIn",
      icon: "IconLinkedin",
    },
  },
];

const steps = [
  { name: "welcome" },
  { name: "personal" },
  { name: "passions" },
  { name: "skills" },
];
const currentStep = computed<string>(
  () => questions[currentIndex.value].stepName
);
const currentIndex = ref(0);

const toNext = () => {
  if (currentIndex.value === questions.length - 1)
    navigateTo("/onboarding/complete");
  else currentIndex.value++;
};
const toPrev = () => {
  currentIndex.value--;
};

const selection = ref<null | Answer>();

watch(selection, (newVal) => {
  if (!!newVal) {
    const data = { [newVal.id.toString()]: newVal.value };

    updateUserInfo(
      newVal.step as "personal" | "passions" | "skills",
      user.value?.email!,
      data
    );
  }
});

// const previouslyExistingInfo = computed<Answer>(() => {
//   const currQues = questions[currentIndex.value];
//   const previouslySelected: Answer | undefined =
//     user.value?.data && user.value.data[currQues.stepName]?.[currQues.id];

//   return previouslySelected;
// });
</script>
<template>
  <div class="welcome-page mt-10">
    <h3 class="text-title-h3 text-white ml-4 font-semibold">Il tuo Retex Passport</h3>
    <!-- <pre>{{ selection }}</pre> -->
    <OrganismsScrollStepper
      class="w-full mt-10"
      v-bind="{ currentStep }"
      :steps="questions"
      @next-step="toNext"
      @prev-step="toPrev"
    >
      <template #step="step">
        <MoleculesQuestionStep
          v-bind="step"
          :current-index="currentIndex"
          :selected-option="selection?.value ?? ''"
          @select="selection = $event"
          @next-step="toNext"
          @prev-step="toPrev"
        >
          <template #pagination>
            Domanda {{ currentIndex + 1 }}/{{ questions.length }}
          </template>
        </MoleculesQuestionStep>
      </template>
    </OrganismsScrollStepper>
  </div>
</template>

<style scoped></style>
