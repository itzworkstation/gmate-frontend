<script setup>
import { ref, shallowRef, toRefs } from "vue";
const emit = defineEmits(["closeForm", "onSave"]);
const props = defineProps({ productObj: {} });
const productObj = ref(props.productObj);
import {
  ChevronDownIcon,
  ChevronUpIcon,
  CategoryIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  ScaleIcon,
  PencilIcon,
  TrashIcon,
  NumbersIcon,
  BrandItchIcon,
} from "vue-tabler-icons";

import BaseBreadcrumb from "@/components/shared/BaseBreadcrumb.vue";
import { Form } from "vee-validate";

const name = ref("");
const valid = ref(false);
const dialog = ref(false);
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

function editItem(item) {
  alert(item.name);
}

function closeModel() {
  emit("closeForm", false);
}

const saveProduct = () => {
  emit("onSave", productObj);
};
</script>

<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-card variant="outlined" elevation="11" class="withbg">
        <v-row justify="center">
          <v-col cols="12">
            <v-card title="Add Product">
              <v-divider></v-divider>
              <v-card-text>
                <v-row dense>
                  <v-col cols="12" md="6" sm="6">
                    <v-text-field
                      label="Name*"
                      color="primary"
                      variant="underlined"
                      v-model="productObj.name"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-select
                      :items="['0-17', '18-29', '30-54', '54+']"
                      label="Category*"
                      color="primary"
                      :prepend-icon="CategoryIcon"
                      variant="underlined"
                      v-model="productObj.sub_category"
                      required
                    ></v-select>
                  </v-col>

                  <v-col cols="12" md="4" sm="6">
                    <v-text-field
                      label="Measurement*"
                      color="primary"
                      variant="underlined"
                      type="number"
                      placeholder="200"
                      :prepend-icon="NumbersIcon"
                      persistent-hint
                      v-model="productObj.measurement"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="4" sm="6">
                    <v-select
                      :items="['Grams', 'Liter', 'Packet']"
                      label="Measurement Unit*"
                      color="primary"
                      placeholder="gm/liter"
                      variant="underlined"
                      :prepend-icon="ScaleIcon"
                      v-model="productObj.measurement_unit"
                      required
                    ></v-select>
                  </v-col>

                  <v-col cols="12" md="4" sm="6">
                    <v-text-field
                      label="Product Count*"
                      color="primary"
                      variant="underlined"
                      type="number"
                      hint="Pair of Measurement & its unit"
                      persistent-hint
                      :prepend-icon="NumbersIcon"
                      v-model="productObj.product_count"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="4" sm="6">
                    <v-select
                      :items="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30]"
                      label="Days to finish 1 product quentity*"
                      suffix="day(s)"
                      color="primary"
                      variant="underlined"
                      :prepend-icon="NumbersIcon"
                      hint="Tentative days to finish 1 product quantity"
                      v-model="productObj.days"
                      persistent-hint
                      required
                    ></v-select>
                  </v-col>

                  <v-col cols="12" md="4" sm="6"> </v-col>

                  <v-col cols="12" md="4" sm="6">
                    <v-select
                      :items="['Vim', 'Fortune', 'Dhara']"
                      label="Brand"
                      :prepend-icon="BrandItchIcon"
                      color="primary"
                      variant="underlined"
                      v-model="productObj.brand"
                      required
                    ></v-select>
                  </v-col>
                </v-row>
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <small class="text-caption text-medium-emphasis"
                  >*indicates required field</small
                >
                <v-spacer></v-spacer>

                <v-btn text="Close" variant="plain" @click="closeModel()"></v-btn>

                <v-btn
                  color="primary"
                  text="Save"
                  variant="tonal"
                  @click="saveProduct()"
                ></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card>
    </v-col>
  </v-row>
</template>
