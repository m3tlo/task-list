<template>
  <li class="wish-list__item">
    <div>
      <p class="list-item__title"><strong>{{card.title}}</strong></p>
      <p class="list-item__description">{{card.description}}</p>
      <span
       class="status"
       :style="[card.completed ? 'color:green;' : 'color:red;']">
       {{card.completed ? 'Исполнено' : 'В ожидании'}}
      </span>
    </div>
    <button @click.stop=" emit('delete-card')">Удалить</button>
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

  const emit = defineEmits([
    'delete-card'
  ])

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
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .list-item__title{
    text-transform: uppercase;
  }
  button{
    background: none;
    padding: 5px;
    border-radius: 10px;
    border: 1px solid;

    cursor: pointer;
  }
  
</style>