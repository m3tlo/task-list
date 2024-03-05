<template>
  <div @click.self="emit('close-form')" class="wrapper">

    <form @submit.prevent="emit('update-card')" class="form">
    <h2>Форма редактирования</h2>

      <label>
        <span> Заголовок:</span>
        <input 
          type="text" 
          :value="card.title" 
          @input="setTitle"/>
      </label>

      <label>
        <span> Описание:</span>
        <input 
          type="text" 
          :value="card.description" 
          @input="setDescription"/>
      </label>

      <label style="flex-direction: row; gap: 1rem  ;">
        <span>Выполнено?:</span>
        <input 
          type="checkbox" 
          name="completed" 
          id="comleted" 
          :checked="card.completed" 
          :value="card.completed" 
          @change="setCompleted">
      </label>

      <button class="button" type="submit" >Изменить</button>
    </form>

  </div>
</template>
<script setup>

const props = defineProps({
  card:{
    type: Object
  }
})
const emit = defineEmits([
  "set-card" , "edit-card", "close-form"
])

const setTitle = (event) => {
  const data = Object.assign({}, props.card)
  data.title = event.target.value
  emit('set-card', data)
}
const setDescription = (event) => {
  const data = Object.assign({}, props.card)
  data.description = event.target.value
  emit('set-card', data)
}
const setCompleted = (event) => {
const data = Object.assign({}, props.card)
  data.completed = event.target.value
  emit('set-card', data)
}
</script>

<style scoped>

</style>