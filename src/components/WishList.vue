
<template>
   <h1 style="text-align: center;">Список задач</h1>
   <ul class="wish-list">
    <app-card 
      v-for="(card, index) in cards" 
      :key="card.id"
      :index="index"
      :card="card"
      @click="emit('click-by-card', card)"
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
    'click-by-card', 'open-create-form'
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
	bottom: 0;
	right: 0;
  background: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 2rem;
  font-weight: 100;
  cursor: pointer;
}
</style>
