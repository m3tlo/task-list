<template>
  <li class="wish-list__item">
       <p class="list-item__title"><strong>{{card.title}}</strong></p>
       <p class="list-item__description">{{card.description}}</p>
       <span 
        class="status" 
        :style="[card.completed ? 'color:green;' : 'color:red;']">
        {{card.completed ? 'Исполнено' : 'В ожидании'}}
       </span>
     </li>
</template>

<script setup>
  const props = defineProps({
    index:{
      type: Number
    },
    card:{
      type: Object
    }
  })
</script>

<style scoped>
  .wish-list__item{
    list-style-type: none;
    border: 1px solid black;
    border-radius: 20px;
    width: 500px;
    padding: 1rem;
    cursor: pointer;
    background: #f1f1f1;
  }
  .list-item__title{
    text-transform: uppercase;
  }
  
</style>