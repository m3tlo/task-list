<template>
  <div class="wrapper" @click.self="emit('close-form')">

    <form @submit.prevent="addCard" class="form">
    <h2>Форма создания</h2>

      <label>
        <span> Заголовок:</span>
        <input type="text" v-model="newCard.title"/>
      </label>

      <label>
        <span> Описание:</span>
        <input type="text" v-model="newCard.description"/>
      </label>

      <button class="button" type="submit" >Создать</button>
    </form>

  </div>
</template>
<script setup>
import { ref } from 'vue';

const emit = defineEmits([
  "set-card"
])

const newCard = ref({
  id: 0,
  title: "",
  description: "",
  completed: false
})

const setTitle = (event) => {
  const value = event.target.value
  newCard.title = value
}
const setDescription = (event) => {
  const value = event.target.value
  newCard.description = value
}
const addCard = () => {
  emit("set-card", newCard.value)
  console.log(newCard.value)
}

</script>

<style scoped>

</style>