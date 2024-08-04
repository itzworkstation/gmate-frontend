<script setup>
import { ref, shallowRef } from "vue";

import BaseBreadcrumb from "@/components/shared/BaseBreadcrumb.vue";
import { Form } from "vee-validate";

const name = ref("");
const valid = ref(false);
const categories = ref([]);
const ex11 = ref(["red", "indigo", "orange", "primary", "secondary", "success"]);
const breadcrumbs = shallowRef([
  {
    title: "Others",
    disabled: false,
    href: "#",
  },
  {
    title: "Sample Page",
    disabled: true,
    href: "#",
  },
]);
</script>

<template>
  <v-row justify="center">
    <v-col cols="10">
      <v-card variant="outlined" elevation="11" class="withbg">
        <v-card-item>
          <div class="d-sm-flex align-center justify-space-between">
            <v-card-title>New Store</v-card-title>
          </div>
        </v-card-item>
        <v-divider></v-divider>
        <v-row justify="center">
          <v-col cols="6" md="6">
            <v-sheet class="pa-4">
              <Form
                @submit="validate"
                class="mt-7 loginForm"
                v-slot="{ errors, isSubmitting }"
              >
                <v-text-field
                  v-model="mobileNumber"
                  :rules="mobileNoRules"
                  label="Store Name"
                  class="mt-4 mb-8"
                  required
                  density="comfortable"
                  hide-details="auto"
                  variant="underlined"
                  color="primary"
                ></v-text-field>
                <p class="mb-4 text-disabled">Choose Below Category</p>
                <v-divider></v-divider>
                <v-row no-gutters>
                  <v-col v-for="n in ex11" :key="n" cols="12" sm="12" md="4">
                    <v-switch
                      v-model="categories"
                      color="primary"
                      :label="n"
                      :value="n"
                    ></v-switch>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col md="8">
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
                      Create</v-btn
                    ></v-col
                  >
                </v-row>

                <div v-if="errors.apiError" class="mt-2">
                  <v-alert color="error">{{ errors.apiError }}</v-alert>
                </div>
              </Form>
            </v-sheet>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>
