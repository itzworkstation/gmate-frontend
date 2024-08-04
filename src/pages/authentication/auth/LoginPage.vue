<script setup>
import Logo from "@/layouts/full/logo/LogoDark.vue";
import AuthLogin from "../authForms/AuthLogin.vue";
import { useAuthStore } from "@/stores/auth";
import AuthOtp from "../authForms/AuthOtp.vue";

const authStore = useAuthStore();
</script>

<template>
  <v-row class="h-100vh" no-gutters>
    <!---Left Part-->
    <v-col cols="12" class="d-flex align-center bg-lightprimary">
      <v-container>
        <div class="pa-7 pa-sm-12">
          <v-row justify="center">
            <v-col cols="12" lg="10" xl="6" md="7">
              <v-card elevation="22" class="loginBox">
                <v-card variant="outlined">
                  <v-card-text class="pa-9">
                    <!---Left Part Logo -->
                    <v-row>
                      <v-col cols="12" class="text-center">
                        <h1 class="text-primary text-h2 mt-8">GMate</h1>
                        <!-- <h2 class="text-secondary text-h2 mt-8">Hi, Welcome To GMate</h2> -->
                        <h4 class="text-disabled text-h4 mt-3">
                          {{
                            authStore.showOtpScreen
                              ? "OTP sent to " + authStore.mobileNumber
                              : "Enter mobile number to continue"
                          }}
                        </h4>
                      </v-col>
                    </v-row>
                    <AuthOtp v-if="authStore.showOtpScreen" />
                    <AuthLogin v-else />
                  </v-card-text>
                </v-card>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-col>
    <!---Left Part-->
  </v-row>
</template>
<style lang="scss">
.loginBox {
  max-width: 475px;
  margin: 0 auto;
}
</style>
