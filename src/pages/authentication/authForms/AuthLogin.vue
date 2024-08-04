<script setup>
import { ref } from "vue";

import { useAuthStore } from "@/stores/auth";
import { Form } from "vee-validate";

const checkbox = ref(false);
const valid = ref(false);
const show1 = ref(false);
//const logform = ref();

const mobileNumber = ref("7696099799");
const mobileNoRules = ref([
  (v) => !!v || "Mobile is required",
  (v) => /^([+]\d{2}[ ])?\d{10}$/.test(v) || "Mobile number must be valid",
]);

/* eslint-disable @typescript-eslint/no-explicit-any */
function validate(values, { setErrors }) {
  const authStore = useAuthStore();
  return authStore
    .login(mobileNumber.value)
    .catch((error) => setErrors({ apiError: error }));
}
</script>

<template>
  <Form @submit="validate" class="mt-7 loginForm" v-slot="{ errors, isSubmitting }">
    <v-text-field
      v-model="mobileNumber"
      :rules="mobileNoRules"
      label="Mobile"
      class="mt-4 mb-8"
      required
      density="comfortable"
      hide-details="auto"
      variant="underlined"
      color="primary"
    ></v-text-field>
    <v-btn
      color="secondary"
      :loading="isSubmitting"
      block
      class="mt-2"
      variant="flat"
      size="large"
      :disabled="valid"
      type="submit"
    >
      Send otp</v-btn
    >
    <div v-if="errors.apiError" class="mt-2">
      <v-alert color="error">{{ errors.apiError }}</v-alert>
    </div>
  </Form>
  <div class="mt-5 text-right">
    <v-divider />
    <h5 class="mt-2 text-capitalize mr-n2 text-primary">Gmate is your grocery mate.</h5>
  </div>
</template>
<style lang="scss">
.loginForm {
  .v-text-field .v-field--active input {
    font-weight: 500;
  }
}
</style>
