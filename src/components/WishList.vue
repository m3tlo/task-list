
<template>
   <p v-if="cards.length <= 0" style="text-align: center;">Список задач пуст</p>
   <ul v-else class="wish-list">
    <app-card 
      v-for="(card, index) in cards" 
      :key="card.id"
      :index="index"
      :card="card"
      @click="emit('click-by-card', card)"
      @delete-card="emit('delete-cards', card)"

    />
   </ul>
    <button @click="emit('open-create-form')" >+</button>

</template>

<script setup>
  import AppCard from './AppCard.vue';  
  
  const props = defineProps({
    cards: {
      type: Array
    }
  })

  const emit = defineEmits([
    'click-by-card', 'open-create-form', 'delete-cards'
  ])

</script>

<style scoped>
.wish-list{
  display: flex;
  flex-wrap: wrap;
  gap: 2rem ;
  margin: 2rem 0;
}
button{
  position: absolute;
	bottom: 10%;
	right: 2%;
  background: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 2rem;
  font-weight: 100;
  cursor: pointer;
}
</style>
