<script setup>
import { ref, shallowRef } from "vue";
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
  MoodSmileIcon,
} from "vue-tabler-icons";
import { VSonner, toast } from "vuetify-sonner";
import StoreForm from "./StoreForm.vue";
import "vuetify-sonner/style.css";

import BaseBreadcrumb from "@/components/shared/BaseBreadcrumb.vue";
import { Form } from "vee-validate";

const name = ref("");
const loading = ref(false);
const dialog = ref(false);
const toggleDialog = (obj) => {
  dialog.value = obj;
};

const saveProduct = (obj) => {
  productObj.value = obj;
  console.log(obj.value.name);
  toast("Product saved successfully", {
    cardProps: {
      color: "success",
    },
    prependIcon: MoodSmileIcon,
  });
  dialog.value = false;
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};

const productObj = ref({
  name: "Product",
  sub_category: "start",
  measurement: "100",
  measurement_unit: "gm",
  product_count: 1,
  days: 20,
  brand: "KM",
});

const groupBy = ref([
  {
    key: "gluten",
    order: "asc",
  },
]);
const headers = ref([
  {
    title: "Product",
    align: "start",
    sortable: false,
    key: "name",
  },
  { title: "Measurement type", key: "calories" },
  { title: "Measurement", key: "fat" },
  { title: "Days to finish", key: "carbs" },
  { title: "Brand", key: "protein" },
  { title: "Actions", key: "actions", sortable: false },
]);
const desserts = ref([
  {
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    iron: "1%",
    gluten: false,
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    gluten: false,
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    gluten: true,
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    iron: "8%",
    gluten: true,
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    iron: "16%",
    gluten: true,
  },
  {
    name: "Jelly bean",
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    iron: "0%",
    gluten: false,
  },
  {
    name: "Lollipop",
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    iron: "2%",
    gluten: false,
  },
  {
    name: "Honeycomb",
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    iron: "45%",
    gluten: true,
  },
  {
    name: "Donut",
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    iron: "22%",
    gluten: true,
  },
  {
    name: "KitKat",
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    iron: "6%",
    gluten: true,
  },
]);
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

const editItem = (item) => {
  productObj.value = item;
  dialog.value = true;
};
</script>

<template>
  <v-row justify="center">
    <VSonner position="top-right" />
    <v-col cols="10">
      <v-card variant="outlined" elevation="11" class="withbg">
        <v-row justify="center" class="pt-5 pl-9">
          <v-col cols="4">
            <p>Manage Store</p>
            <p class="text-disabled">Manage Store</p>
          </v-col>
          <v-col cols="2"></v-col>
          <v-col cols="4"
            ><v-combobox
              label="Choose Category"
              :items="[
                'California',
                'Colorado',
                'Florida',
                'Georgia',
                'Texas',
                'Wyoming',
              ]"
              :prepend-icon="CategoryIcon"
              color="primary"
              variant="underlined"
              :autofocus="true"
            ></v-combobox>
          </v-col>

          <v-col cols="2">
            <v-dialog v-model="dialog" max-width="800">
              <template v-slot:activator="{ props: activatorProps }">
                <v-btn
                  class="text-none font-weight-regular"
                  prepend-icon="mdi-account"
                  text="Add Product"
                  variant="tonal"
                  color="primary"
                  v-bind="activatorProps"
                ></v-btn>
              </template>
              <StoreForm
                @closeForm="toggleDialog"
                @onSave="saveProduct"
                :productObj="productObj"
              />
            </v-dialog>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row justify="start">
          <v-col cols="12">
            <v-sheet class="pa-4">
              <v-data-table
                :group-by="groupBy"
                :headers="headers"
                :items="desserts"
                item-value="name"
                :hover="true"
                color="purple"
                :items-per-page-options="[
                  { value: 10, title: '10' },
                  { value: 20, title: '20' },
                ]"
                :loading="loading"
                :last-icon="ChevronsRightIcon"
                :first-icon="ChevronsLeftIcon"
                :next-icon="ChevronRightIcon"
                :prev-icon="ChevronLeftIcon"
              >
                <template v-slot:loading>
                  <v-skeleton-loader type="table-row@10"></v-skeleton-loader>
                </template>
                <template
                  v-slot:group-header="{ item, columns, toggleGroup, isGroupOpen }"
                >
                  <tr class="bg-red">
                    <td :colspan="columns.length">
                      <VBtn
                        :icon="isGroupOpen(item) ? ChevronUpIcon : ChevronDownIcon"
                        size="small"
                        variant="text"
                        @click="toggleGroup(item)"
                      ></VBtn>
                      {{ item.value ? "Contains gluten" : "Gluten free" }}
                    </td>
                  </tr>
                </template>
                <template v-slot:item.actions="{ item }">
                  <v-btn
                    icon
                    class="text-primary mx-3"
                    color="lightsecondry"
                    rounded="sm"
                    title="dssfddf"
                    size="small"
                    variant="flat"
                    @click="editItem(item)"
                  >
                    <v-tooltip
                      activator="parent"
                      location="end"
                      close-delay="60"
                      content-class="hello"
                      >Manage Store</v-tooltip
                    >
                    <PencilIcon stroke-width="1.5" size="22" />
                  </v-btn>
                  <v-btn
                    icon
                    class="text-primary mx-3"
                    color="lightsecondry"
                    rounded="sm"
                    title="dssfddf"
                    size="small"
                    variant="flat"
                    @click="editItem(item)"
                  >
                    <v-tooltip
                      activator="parent"
                      location="end"
                      close-delay="60"
                      content-class="hello"
                      >Manage Store</v-tooltip
                    >
                    <TrashIcon stroke-width="1.5" size="22" />
                  </v-btn>
                </template>
              </v-data-table>
            </v-sheet>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>
