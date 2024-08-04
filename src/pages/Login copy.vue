<template>
  <v-card
    v-if="false"
    class="py-8 px-6 text-center mx-auto ma-4"
    elevation="12"
    max-width="400"
    width="100%"
  >
    <h3 class="text-h6 mb-4">Verify Your Account</h3>

    <div class="text-body-2">
      We sent a verification code to john..@gmail.com <br />

      Please check your email and paste the code below.
    </div>

    <v-sheet color="surface">
      <v-otp-input v-model="otp" type="password" variant="underlined"></v-otp-input>
    </v-sheet>

    <v-btn
      class="my-4"
      color="purple"
      height="40"
      text="Verify"
      variant="flat"
      width="70%"
    ></v-btn>

    <div class="text-caption">
      Didn't receive the code? <a href="#" @click.prevent="otp = ''">Resend</a>
    </div>
  </v-card>
  <v-card
    v-show="true"
    class="py-8 px-6 text-center mx-auto ma-4"
    elevation="16"
    max-width="400"
    width="100%"
  >
    <h3 class="text-h6 mb-4 text-primary">GMate</h3>

    <v-sheet color="surface" class="text-start">
      <v-text-field
        v-model="mobile"
        label="Phone no"
        prepend-icon="$vuetify"
        variant="underlined"
        color="primary"
        density="compact"
        hint="OTP will be sent on this phone no"
      ></v-text-field>
      <v-input v-model="mobile" type="text" variant="underlined"></v-input>
    </v-sheet>

    <v-btn
      class="my-4"
      color="purple"
      height="40"
      text="Send OTP"
      variant="outlined"
      width="70%"
    >
    </v-btn>
  </v-card>
  <v-sheet -v-if="false">
    <div class="pa-6 bg-secondary rounded-circle d-inline-block"></div>
    <v-form fast-fail @submit.prevent="validateLogin" theme="dark">
      <v-text-field
        variant="underlined"
        v-model="form.email"
        label="Mobile"
      ></v-text-field>

      <v-text-field
        variant="underlined"
        v-model="form.password"
        label="Password"
      ></v-text-field>
      <a href="#" class="text-body-2 font-weight-regular">Forgot Password?</a>

      <v-btn type="submit" variant="outlined" color="primary" block class="mt-2"
        >Sign in</v-btn
      >
    </v-form>
    <div class="mt-2">
      <p class="text-body-2 myCustomLightTheme.color.primary">
        Don't have an account? <a href="#">Sign Up</a>
      </p>
    </div>
  </v-sheet>
</template>

<script setup>
import { reactive, ref } from "vue";
import { routerPush } from "../router";
import { useAuthStore } from "../stores/auth";
const { login } = useAuthStore();
const form = reactive({
  mobile_no: "",
  otp: "",
  phoneField: true,
  otpField: false,
});

function validateLogin() {
  login(form);
}
</script>
