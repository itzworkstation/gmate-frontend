<template>
  <v-card
    v-if="otpField"
    class="py-8 px-6 text-center mx-auto ma-4"
    elevation="12"
    max-width="400"
    width="100%"
  >
    <h3 class="text-h6 mb-4">Verify Your Account</h3>

    <div class="text-body-2">
      We have sent a verification code to +91-{{ form.mobile_no }} <br />

      Please check your email/mobile and enter the code below.
    </div>

    <v-sheet color="surface">
      <v-otp-input v-model="form.otp" type="password" variant="underlined"></v-otp-input>
    </v-sheet>

    <v-btn
      class="my-4"
      color="purple"
      height="40"
      text="Verify"
      variant="flat"
      width="70%"
      @click="validateOtp"
    ></v-btn>

    <div class="text-caption">
      Didn't receive the code? <a href="#" @click.prevent="resendOtp">Resend</a>
    </div>
  </v-card>
  <v-card
    v-if="phoneField"
    class="py-8 px-6 text-center mx-auto ma-4"
    elevation="16"
    max-width="400"
    min-width="400"
    width="100%"
  >
    <h3 class="text-h6 mb-4 text-primary">GMate</h3>

    <v-sheet color="surface" class="text-start">
      <v-text-field
        v-model="form.mobile_no"
        label="Phone no"
        prepend-icon="$vuetify"
        variant="underlined"
        color="primary"
        density="compact"
        hint="OTP will be sent on this phone no"
      ></v-text-field>
    </v-sheet>

    <v-btn
      class="my-4"
      color="purple"
      height="40"
      text="Send OTP"
      variant="outlined"
      width="70%"
      @click="sendOtp"
    >
    </v-btn>
  </v-card>
</template>

<script setup>
import { reactive, ref } from "vue";
import { routerPush } from "../router/index";
import { useAuthStore } from "../stores/auth";
const { login, signup } = useAuthStore();
const form = reactive({
  mobile_no: "7696099799",
  otp: "",
});

const phoneField = ref(true);
const otpField = ref(false);
function validateLogin() {
  login(form);
}

const validateOtp = () => {
  console.log(form.otp);
  signup(form.otp);
};

const sendOtp = () => {
  otpField.value = true;
  phoneField.value = false;
};
</script>
