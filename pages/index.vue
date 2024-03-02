<script setup lang="ts">
import type { User } from "~/stores/users";
import { useUsersStore } from "~/stores/users";

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
</script>
<template>
  <OrganismsStepWelcome v-if="user" v-bind="{ user }"></OrganismsStepWelcome>
</template>
