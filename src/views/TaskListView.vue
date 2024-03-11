<template>
    <router-view/>
    <div style="display: flex">
      <form-create
      :cards="cards"
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
            ? 'display: flex; '
            : 'display: none;',
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
      @delete-cards="deleteCard"
    />
</template>

<script setup>
import WishList from "@/components/WishList.vue";
import FormCreate from "@/components/FormCreate.vue";
import FormEdit from "@/components/FormEdit.vue";
import AppLoader from "@/components/AppLoader.vue";

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
    if(localStorage.cards === '' || localStorage.cards === undefined) {
      localStorage.cards = "[]"
    }else{
      cards.value = JSON.parse(localStorage.cards)
    }
    pageSetting.value.loading = false;
    console.log(`array: ${cards.value}, localStorage: ${localStorage.cards}`);
        

  }, 2000);
};
fetchCards()


const addCard = (card) => {
  cards.value.push({...card});
  localStorage.cards = JSON.stringify(cards.value)
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
  localStorage.cards = JSON.stringify(cards.value)
  pageSetting.value.updateFormClosed = true;
};
const deleteCard = (card) => {
  console.log(card)

  cards.value = cards.value.filter(item => item !== card )
  localStorage.cards = JSON.stringify(cards.value)

  console.log(1)
}
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
