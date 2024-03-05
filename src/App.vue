<template>
  <div class="container">
    <div style="display: flex">
      <form-create
        @set-card="addCard"
        @close-form="closeForm"
        :style="[
          !pageSetting.createFormClosed
            ? 'display: flex '
            : 'display: none   ;',
        ]"
      />
      <form-edit
        :card="cardForEdit"
        @set-card="updateCard"
        @update-card="saveCard"
        @close-form="closeForm"
        :style="[
          !pageSetting.updateFormClosed
            ? 'display: flex '
            : 'display: none   ;',
        ]"
      />
    </div>
    <app-loader
      v-if="pageSetting.loading"
    />
    <wish-list
      v-else
      :cards="cards"
      @open-create-form="pageSetting.createFormClosed = false"
      @click-by-card="openCardforEdit"
    />
  </div>
</template>

<script setup>
import WishList from "./components/WishList.vue";
import FormCreate from "./components/FormCreate.vue";
import FormEdit from "./components/FormEdit.vue";
import AppLoader from "./components/AppLoader.vue";

import { ref } from "vue";

const pageSetting = ref({
  updateFormClosed: true,
  createFormClosed: true,
  loading: true,
});
const cards = ref([]);
const cardForEdit = ref({
  id: 0,
  title: "",
  description: "",
  completed: false,
});

const fetchCards = () => {
  setTimeout(() => {
    cards.value = [
      {
        id: 1,
        title: "ноутбук",
        description: "описание к ноутбуку",
        completed: true,
      },
      {
        id: 2,
        title: "холодильник",
        description: "описание к холодильнику",
        completed: false,
      },
      {
        id: 3,
        title: "телефон",
        description: "описание к телефону",
        completed: false,
      },
      {
        id: 4,
        title: "гироскутер",
        description: "описание к гироскутеру",
        completed: false,
      },
      {
        id: 5,
        title: "кроссовки",
        description: "описание к кроссовкам",
        completed: false,
      },
    ];
    pageSetting.value.loading = false;
    console.log(cards.value);
  }, 2000);
};
fetchCards()

const addCard = (card) => {
  cards.value.push(card);
  pageSetting.value.createFormClosed = true;
};
const updateCard = (card) => {
  cardForEdit.value = card;
};
const saveCard = (card) => {
  const newCard = Object.assign({}, cardForEdit.value);
  cards.value = cards.value.map((card) =>
    card.id === newCard.id ? newCard : card
  );
  pageSetting.value.updateFormClosed = true;
};
const openCardforEdit = (card) => {
  pageSetting.value.updateFormClosed = false;
  cardForEdit.value = Object.assign({}, card);
};

const closeForm = () => {
  pageSetting.value.updateFormClosed = true;
  pageSetting.value.createFormClosed = true;
};
</script>

<style >
@import "@/assets/global.css";
.container {
  position: relative;
}
</style>
