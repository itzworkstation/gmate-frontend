import { isTemplateNode } from '@vue/compiler-core';
<script setup>
import { ref, shallowRef } from "vue";
import { CirclePlusIcon, TableOptionsIcon } from "vue-tabler-icons";
import { routerPush } from "../../router";

import BaseBreadcrumb from "@/components/shared/BaseBreadcrumb.vue";
import { Form } from "vee-validate";

const name = ref("");
const valid = ref(false);
const categories = ref([]);
const desserts = ref([
  {
    name: "Frozen Yogurt",
    calories: 159,
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
  },
  {
    name: "Eclair",
    calories: 262,
  },
  {
    name: "Cupcake",
    calories: 305,
  },
  {
    name: "Gingerbread",
    calories: 356,
  },
  {
    name: "Jelly bean",
    calories: 375,
  },
  {
    name: "Lollipop",
    calories: 392,
  },
  {
    name: "Honeycomb",
    calories: 408,
  },
  {
    name: "Donut",
    calories: 452,
  },
  {
    name: "KitKat",
    calories: 518,
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

function redirectTo(name) {
  routerPush("/stores/" + name + "/manage");
}
</script>

<template>
  <v-row justify="center">
    <v-col cols="10">
      <v-card variant="outlined" elevation="11" class="withbg">
        <v-card-item>
          <div class="d-sm-flex align-center justify-space-between">
            <v-card-title>Store List</v-card-title>
          </div>
        </v-card-item>
        <v-divider></v-divider>
        <v-row justify="start">
          <v-col cols="12">
            <v-sheet class="pa-4">
              <v-table height="300px" :hover="true">
                <tbody>
                  <tr v-for="item in desserts" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>
                      <v-btn
                        icon
                        class="text-secondary mx-3"
                        color="lightsecondary"
                        rounded="sm"
                        size="small"
                        variant="flat"
                        @click="redirectTo(item.name)"
                      >
                        <v-tooltip
                          activator="parent"
                          location="end"
                          close-delay="60"
                          content-class="hello"
                          >Manage Store</v-tooltip
                        >
                        <TableOptionsIcon stroke-width="1.5" size="22" />
                      </v-btn>
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </v-sheet>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>
